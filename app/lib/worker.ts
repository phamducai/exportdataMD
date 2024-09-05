import { format } from '@fast-csv/format';
import { PassThrough } from 'stream';
import sqlserver1 from '@/app/lib/sqlserver1Client';
import { SaleDataDTO } from '@/app/lib/definitions';
import queue from './queue';

// Khai báo kiểu trả về cho công việc
interface JobResult {
  csvBuffer: Buffer;
}

// Worker xử lý công việc và trả về buffer CSV
queue.process(async (job): Promise<JobResult> => {
    const { pprogId } = job.data;

    // Truy vấn dữ liệu từ SQL Server
    const salesData: SaleDataDTO[] = await sqlserver1.$queryRaw`
    SELECT a.Trans_Date AS DATE, 
           CONVERT(datetime, LEFT(EfTran_Date, 12), 101) AS EfDate, 
           a.StkClust_ID - 1 AS store, 
           a.Trans_No, 
           a.Goods_ID, 
           c.Short_Name, 
           a.Goods_Qty, 
           a.Goods_Qty / 2 AS ComboQty, 
           Promotion_Code 
    FROM STr_SaleSet a
    INNER JOIN Str_Hdr b ON a.Trans_No = b.Trans_No
    INNER JOIN goods c ON a.Goods_ID = c.Goods_ID
    JOIN DSMART90.dbo.RT_PProgs d ON a.PProg_ID = d.PProg_ID
    WHERE a.PProg_ID = ${pprogId}
    ORDER BY EfTran_Date, Trans_No, a.StkClust_ID ASC
  `;

    // Tạo file CSV dưới dạng buffer
    const csvStream = format({ headers: true });
    const passThrough = new PassThrough();
    passThrough.write('\uFEFF'); // BOM for UTF-8

    const chunks: Buffer[] = [];
    passThrough.on('data', (chunk) => {
        chunks.push(Buffer.from(chunk));
    });

    csvStream.pipe(passThrough);

    const headers = ['DATE', 'EfDate', 'Store', 'Trans_No', 'Goods_ID', 'Short_Name', 'Goods_Qty', 'ComboQty', 'Promotion_Code'];
    csvStream.write(headers);

    salesData.forEach((row) => {
      csvStream.write({
        DATE: row.DATE,
        EfDate: row.EfDate,
        Store: row.store,
        Trans_No: row.Trans_No,
        Goods_ID: row.Goods_ID,
        Short_Name: row.Short_Name,
        Goods_Qty: row.Goods_Qty,
        ComboQty: row.ComboQty,
        Promotion_Code: row.Promotion_Code,
      });
    });

    csvStream.end();

    // Trả về buffer khi hoàn tất
    return new Promise((resolve) => {
        passThrough.on('end', () => {
            const csvBuffer = Buffer.concat(chunks);
            resolve({ csvBuffer });
        });
    });
});
