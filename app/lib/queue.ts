import Bull from 'bull';

const queue = new Bull('data-processing', {
  redis: {
    host: 'localhost',
    port: 6379,
  },
});

export const addJobToQueue = (jobData: any) => {
  queue.add(jobData);
};

export default queue;