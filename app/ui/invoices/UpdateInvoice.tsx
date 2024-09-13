'use client'; // This is a client component

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState } from "react";

export function UpdateInvoice({ id ,promotion }: { id: number ,promotion:string|null}) {
  const [loading, setLoading] = useState(false);
  // console.log(id);
  const handleDownload = async () => {
    setLoading(true);
    console.log(promotion,"promotion ");
    try {
      const response = await axios.post('/api/export', { pprogId: id,
        ppogCode: promotion
       }, {
        responseType: 'blob',  // Đảm bảo trả về blob (dữ liệu nhị phân)
    });

    // Tạo URL từ blob
    const url = window.URL.createObjectURL(new Blob([response.data]));

    // Tạo link để tải file
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `promotion_${promotion}.xlsx`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className={`rounded-md border p-2 hover:bg-gray-100 ${loading ? 'opacity-50' : ''}`}
      disabled={loading}
    >
      {loading ? 'Downloading...' : <ArrowDownTrayIcon className="w-5" />}
    </button>
  );
}
