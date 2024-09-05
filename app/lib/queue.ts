import Bull from 'bull';

// Khởi tạo hàng chờ Bull
const queue = new Bull('data-processing', {
  redis: {
    host: 'localhost',  // Địa chỉ Redis
    port: 6379,         // Cổng Redis
  },
});

// Hàm để thêm công việc vào hàng chờ và trả về đối tượng `Job`
export const addJobToQueue = (jobData: any) => {
  return queue.add(jobData);  // Trả về đối tượng `Job`
};

export default queue;
