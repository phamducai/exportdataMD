import { NextRequest, NextResponse } from 'next/server';
import { addJobToQueue } from '@/app/lib/queue';  // Hàng chờ Bull

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { pprogId } = body;
        console.log(pprogId);
        console.log("hello1");
        if (!pprogId) {
            return NextResponse.json({ message: 'PProg_ID is required' }, { status: 400 });
        }

        // Thêm công việc vào hàng chờ và trả về đối tượng `job`
        const job = await addJobToQueue({ pprogId });
        console.log("hello2");
        // Đợi công việc trong hàng chờ hoàn thành
        const result = await job.finished();
        console.log("hello3");

        // `result` sẽ chứa buffer CSV từ worker
        const csvData = result.csvBuffer;  // Worker trả về file CSV dưới dạng buffer

        // Thiết lập headers cho file CSV
        const headers = new Headers();
        headers.set('Content-Type', 'text/csv; charset=utf-8');
        headers.set('Content-Disposition', `attachment; filename="sales_data_${pprogId}.csv"`);

        // Trả về CSV dưới dạng buffer
        return new NextResponse(csvData, { headers });

    } catch (error) {
        return NextResponse.json({ message: 'Error adding job to queue', error }, { status: 500 });
    }
}
