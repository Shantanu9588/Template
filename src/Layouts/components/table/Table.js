import React from "react";

export default function Table({ data }) {

  return (
    <div className="bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-gray-600 border-b border-blue-900-10">
            <tr>
              <th className="text-left py-1.5 px-4 text-xs font-medium">
                ORDER ID
              </th>
              <th className="text-left py-1.5 px-4 text-xs font-medium">
                PRODUCTS
              </th>
              <th className="text-left py-1.5 px-4 text-xs font-medium">
                CUSTOMER
              </th>
              <th className="text-left py-1.5 px-4 text-xs font-medium">
                CHANNEL
              </th>
              <th className="text-left py-1.5 px-4 text-xs font-medium">
                TOTAL
              </th>
              <th className="text-left py-1.5 px-4 text-xs font-medium">
                DELIVERY DATE
              </th>
            </tr>
          </thead>
          <tbody className="text-blue-900">
            {data.map((order, index) => (
              <tr key={index} className="border-b border-blue-900-10 hover:bg-gray-50 transition">
                <td className="px-4 h-12 text-xs font-normal text-blue-900">
                  {order.id}
                </td>

                <td className="px-4 h-12">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-xs font-normal text-blue-900">
                      x{order.quantity}
                    </span>
                    <img
                      src={order.image}
                      alt=""
                      className="w-[30px] h-[36px] object-cover"
                    />
                    <span className="truncate max-w-[150px] text-xs font-normal text-blue-900">
                      {order.product}
                    </span>
                  </div>
                </td>

                <td className="px-4 h-12">
                  <div className="border border-blue-900-10 bg-blue-900-5 py-[5px] px-[6px] rounded-lg">
                    {order.channelLogo()}
                  </div>
                </td>

                <td className="px-4 h-12">
                  <div className="flex items-center gap-2">
                    <img
                      src={order.customerAvatar}
                      alt={order.customer}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-xs font-normal text-blue-900">
                      {order.customer}
                    </span>
                  </div>
                </td>

                <td className="px-4 h-12 text-xs font-normal text-blue-900">
                  {order.total}
                </td>

                <td className="px-4 h-12 text-xs font-normal text-blue-900">
                  {order.delivery}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-right mt-4">
        <a
          href="#"
          className="text-sm text-indigo-600 font-medium hover:underline"
        >
          View 256 more orders →
        </a>
      </div>
    </div>
  );
}
