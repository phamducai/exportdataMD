import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';
import sqlserver1 from '@/app/lib/sqlserver1Client';

export async function fetchRevenue() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 10;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function fetchFilteredPromotion(
  query: string | undefined,
  currentPage: number,
  startDate: Date | undefined,
  endDate: Date | undefined,
) {
  const ITEMS_PER_PAGE = 10; // Số lượng item trên mỗi trang
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const whereClause: any = {};
  if (query) {
    whereClause.OR = [
      {
        PProg_Code: {
          contains: query
        },
      },
      {
        Promotion_Code: {
          contains: query
        },
      },
      {
        Prom_Description: {
          contains: query
        },
      },
    ];
  }
  if (startDate) {
    whereClause.Effect_Date = {
      gte: startDate, // Lớn hơn hoặc bằng ngày bắt đầu
    };
  }

  if (endDate) {
    whereClause.Due_Date = {
      lte: endDate, // Nhỏ hơn hoặc bằng ngày kết thúc
    };
  }

  try {
    const promotions = await sqlserver1.rT_PProgs.findMany({
      where: whereClause,
      select: {
        PProg_ID: true,
        PProg_Code: true,
        PType_ID: true,
        Promotion_Code: true,
        Prom_Description: true,
        Effect_Date: true,
        Due_Date: true,
        Disabled: true,
      },
      skip: offset,
      take: ITEMS_PER_PAGE,
      orderBy: {
        Effect_Date: 'desc', // Sắp xếp theo ngày hiệu lực
      },
    });

    return promotions;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch promotions.');
  }
}

export async function fetchTotalPages(
  query: string | undefined,
  startDate: Date | undefined,
  endDate: Date | undefined,
): Promise<number> {
  const ITEMS_PER_PAGE = 10; // Số lượng item trên mỗi trang
  const whereClause: any = {};

  if (query) {
    whereClause.OR = [
      {
        PProg_Code: {
          contains: query
        },
      },
      {
        Promotion_Code: {
          contains: query
        },
      },
      {
        Prom_Description: {
          contains: query
        },
      },
    ];
  }

  if (startDate) {
    whereClause.Effect_Date = {
      gte: startDate, // Lớn hơn hoặc bằng ngày bắt đầu
    };
  }

  if (endDate) {
    whereClause.Due_Date = {
      lte: endDate, // Nhỏ hơn hoặc bằng ngày kết thúc
    };
  }

  try {
    // Đếm tổng số bản ghi phù hợp với tiêu chí tìm kiếm
    const totalCount = await sqlserver1.rT_PProgs.count({
      where: whereClause,
    });

    // Tính tổng số trang
    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

    // Trả về số trang, nếu không có bản ghi nào thì trả về 1 trang
    return totalPages > 0 ? totalPages : 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total pages.');
  }
}