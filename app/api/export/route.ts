import { NextRequest, NextResponse } from 'next/server';
import { format } from '@fast-csv/format';
import { PassThrough } from 'stream';
import sqlserver1 from '@/app/lib/sqlserver1Client';
import { SaleDataDTO } from '@/app/lib/definitions';


export async function GET(req: NextRequest) {   
    console.log("hello");
    const { searchParams } = new URL(req.url);
    const pprogId = searchParams.get('PProg_ID');
    console.log(pprogId);
    if (!pprogId) {
      return NextResponse.json({ message: 'PProg_ID is required' }, { status: 400 });
    }
  
    // SQL query and CSV generation logic here...
    const salesData :SaleDataDTO[] = await sqlserver1.$queryRaw`
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
    WHERE a.PProg_ID  = ${pprogId}
    ORDER BY EfTran_Date, Trans_No, a.StkClust_ID ASC
  `;
  
    // CSV stream setup and response generation here...
    const csvStream = format({ headers: true });
    const passThrough = new PassThrough();
    passThrough.write('\uFEFF'); // BOM for UTF-8
  
    const chunks: any[] = [];
    passThrough.on('data', chunk => chunks.push(chunk));
  
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
  
    return new Promise<NextResponse>((resolve, reject) => {
      passThrough.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const headers = new Headers();
        headers.set('Content-Type', 'text/csv; charset=utf-8');
        headers.set('Content-Disposition', `attachment; filename="sales_data_${pprogId}.csv"`);
  
        resolve(new NextResponse(buffer, { headers }));
      });
  
      passThrough.on('error', (error) => {
        console.error('Stream error:', error);
        reject(error);
      });
    });
  }