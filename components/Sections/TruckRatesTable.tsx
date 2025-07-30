import React from "react";
import { FaTruck, FaUser } from "react-icons/fa";

const truckRates = [
  { persons: 1, base: "2 uur", extra: "+ 2/1uur" },
  { persons: 1, base: "118€", extra: "35€" },
  { persons: 2, base: "178€", extra: "45€" },
  { persons: 3, base: "238€", extra: "60€" },
  { persons: 4, base: "298€", extra: "80€" },
];

export default function TruckRatesTable() {
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Vrachtwagen tarieven</h2>
      <table className="min-w-full text-center border border-gray-200 rounded overflow-hidden">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="p-3 text-left">&nbsp;</th>
            <th className="p-3">Basis</th>
            <th className="p-3">Extra</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {truckRates.map((rate, i) => (
            <tr
              key={i}
              className={
                i % 2 === 0
                  ? "bg-white hover:bg-gray-50"
                  : "bg-gray-50 hover:bg-gray-100"
              }
            >
              <td className="p-3 flex items-center gap-1">
                {[...Array(rate.persons)].map((_, idx) => (
                  <FaUser key={idx} className="text-gray-700" />
                ))}
                <FaTruck className="ml-2 text-gray-700" />
              </td>
              <td className="p-3 font-medium text-gray-900 bg-main text-white rounded-l-md">
                {rate.base}
              </td>
              <td className="p-3 font-medium text-gray-900 bg-main text-white rounded-r-md">
                {rate.extra}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
