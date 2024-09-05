'use client'; // This is a client component

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState } from "react";

export function UpdateInvoice({ id }: { id: number }) {
  const [loading, setLoading] = useState(false);
  console.log(id);
  const handleDownload = async () => {
    setLoading(true);
    try {
      // Make a request to your API to fetch the CSV
      const response = await axios.get(`/api/export?PProg_ID=${id}`, {
        responseType: 'blob', // Expecting a blob response for the file
      });

      // Create a URL from the blob response
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a link and trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `promotion_${id}.csv`); // Set the filename
      document.body.appendChild(link);
      link.click();

      // Cleanup: Remove the link after triggering the download
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
