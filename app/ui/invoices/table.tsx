import { fetchFilteredPromotion } from "@/app/lib/data";
import moment from "moment";
import { UpdateInvoice } from "./UpdateInvoice";


export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const promotions = await fetchFilteredPromotion(
    query,
    currentPage,
    undefined,
    undefined
  );
  console.log(query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {promotions?.map((promotion) => (
              <div
                key={promotion.PProg_Code}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {promotion.Promotion_Code}
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                    {promotion.PProg_Code}
                    </p>
                    {/* <p>{formatDateToLocal(invoice.date)}</p> */}
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={promotion.PProg_ID} promotion={promotion.PProg_Code}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Promotion Code
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  PProg_Code
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Prom_Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Start Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  End Date
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {promotions?.map((promotion) => (
                <tr
                  key={promotion.Promotion_Code}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{promotion.Promotion_Code}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {promotion.PProg_Code}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {promotion.Prom_Description}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {moment(promotion.Effect_Date).format("DD/MM/YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {moment(promotion.Due_Date).format("DD/MM/YYYY")}{" "}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={promotion.PProg_ID} promotion={promotion.PProg_Code}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
