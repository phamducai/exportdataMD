// lib/sqlserver1Client.js

import { PrismaClient as PrismaClientSqlServer1 } from '../../generated/sqlserver1';

declare global {
  var sqlserver1: PrismaClientSqlServer1 | undefined;
}

// Tạo Prisma Client cho SQL Server, nếu trong môi trường phát triển thì lưu trữ trong biến global
const sqlserver1 = global.sqlserver1 || new PrismaClientSqlServer1();

if (process.env.NODE_ENV !== 'production') {
  global.sqlserver1 = sqlserver1;
}

export default sqlserver1;
