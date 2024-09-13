import { NextRequest, NextResponse } from 'next/server';
import ExcelJS from 'exceljs';
import sqlserver1 from '@/app/lib/sqlserver1Client';
import { SaleDataDTO } from '@/app/lib/definitions';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { pprogId, ppogCode } = body;
  
  if (!pprogId) {
    return NextResponse.json({ message: 'PProg_ID is required' }, { status: 400 });
  }

  const quantity = await sqlserver1.rT_ProgPSItem.findFirst({
    where: {
      PProg_ID: pprogId
    },
    select: {
      Sold_TrQty: true
    }
  });

  const soldQuantity = quantity?.Sold_TrQty !== undefined && quantity?.Sold_TrQty !== null 
    ? quantity.Sold_TrQty 
    : 1;

  const salesData: SaleDataDTO[] = await sqlserver1.$queryRaw`
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
    WHERE a.PProg_ID = ${pprogId}
    ORDER BY EfTran_Date, Trans_No, a.StkClust_ID ASC
  `;

  // Tạo workbook mới và worksheet
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sales Data');

  // Thêm các tiêu đề cho cột
  worksheet.columns = [
    { header: 'DATE', key: 'DATE', width: 15 },
    { header: 'EfDate', key: 'EfDate', width: 15 },
    { header: 'Store', key: 'store', width: 10 },
    { header: 'Trans_No', key: 'Trans_No', width: 30 },
    { header: 'Goods_ID', key: 'Goods_ID', width: 15 },
    { header: 'Short_Name', key: 'Short_Name', width: 30 },
    { header: 'Goods_Qty', key: 'Goods_Qty', width: 15 },
    { header: 'ComboQty', key: 'ComboQty', width: 15 },
    { header: 'Promotion_Code', key: 'Promotion_Code', width: 30 }
  ];

  // Thêm dữ liệu vào worksheet
  salesData.forEach(row => {
    worksheet.addRow({
      DATE: row.DATE,
      EfDate: row.EfDate,
      store: row.store,
      Trans_No: row.Trans_No,
      Goods_ID: row.Goods_ID,
      Short_Name: row.Short_Name,
      Goods_Qty: +row.Goods_Qty,
      ComboQty: +row.ComboQty,
      Promotion_Code: row.Promotion_Code
    });
  });

  // Tạo buffer để xuất file Excel
  const buffer = await workbook.xlsx.writeBuffer();

  // Trả về file Excel với response
  const headers = new Headers();
  headers.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  headers.set('Content-Disposition', `attachment; filename="sales_data_${ppogCode}.xlsx"`);

  return new NextResponse(buffer, { headers });
}
