// lib/mysql1Client.js

import { PrismaClient as PrismaClientMysql1 } from '../../generated/mysql1';

declare global {
  var mysql1: PrismaClientMysql1 | undefined;
}

// Tạo Prisma Client cho MySQL, nếu trong môi trường phát triển thì lưu trữ trong biến global
const mysql1 = global.mysql1 || new PrismaClientMysql1();

if (process.env.NODE_ENV !== 'production') {
  global.mysql1 = mysql1;
}

export default mysql1;
