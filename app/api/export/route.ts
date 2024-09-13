import { NextRequest, NextResponse } from 'next/server';
import { format } from '@fast-csv/format';
import { PassThrough } from 'stream';
import sqlserver1 from '@/app/lib/sqlserver1Client';
import { SaleDataDTO } from '@/app/lib/definitions';

export async function POST(req: NextRequest) {   
  const body = await req.json();

  const { pprogId ,ppogCode} = body;
  console.log(ppogCode);
    if (!pprogId) {
      return NextResponse.json({ message: 'PProg_ID is required' }, { status: 400 });
    }
    const quantity = await sqlserver1.rT_ProgPSItem.findFirst({
      where: {
        PProg_ID:  pprogId
      },
      select: {
        Sold_TrQty: true 
      }
    });
    const soldQuantity = quantity?.Sold_TrQty !== undefined && quantity?.Sold_TrQty !== null 
    ? quantity.Sold_TrQty 
    : 1;
    // SQL query and CSV generation logic here...
    const salesData :SaleDataDTO[] = await sqlserver1.$queryRaw`
    SELECT CONVERT(VARCHAR(10), a.Trans_Date, 23) AS DATE, 
           CONVERT(VARCHAR(10), EfTran_Date, 23) AS EfDate, 
           a.StkClust_ID - 1 AS store, 
           a.Trans_No, 
           a.Goods_ID, 
           c.Short_Name, 
           a.Goods_Qty, 
           a.Goods_Qty / ${soldQuantity} AS ComboQty, 
           Promotion_Code 
    FROM STr_SaleSet a
    INNER JOIN Str_Hdr b ON a.Trans_No = b.Trans_No
    INNER JOIN goods c ON a.Goods_ID = c.Goods_ID
    JOIN DSMART90.dbo.RT_PProgs d ON a.PProg_ID = d.PProg_ID
    WHERE a.PProg_ID  = ${pprogId}
    ORDER BY EfTran_Date, Trans_No, a.StkClust_ID ASC
  `;
    console.log(salesData);
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
        DATE: row.DATE,   // Định dạng ngày với moment
        EfDate: row.EfDate,  // Định dạng ngày với moment
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
   
    console.log(ppogCode);
    return new Promise<NextResponse>((resolve, reject) => {
      passThrough.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const headers = new Headers();
        headers.set('Content-Type', 'text/csv; charset=utf-8');
        headers.set('Content-Disposition', `attachment; filename="sales_data_${ppogCode}.csv"`);
        resolve(new NextResponse(buffer, { headers }));
      });
  
      passThrough.on('error', (error) => {
        console.error('Stream error:', error);
        reject(error);
      });
    });
  }