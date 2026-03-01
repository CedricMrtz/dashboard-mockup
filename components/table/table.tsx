import React from "react";
import { Product } from "../product";

type TableProps = {
  products: Product[];
};

function Table({ products }: TableProps) {
  const statusClasses: Record<Product["status"], string> = {
    available:
      "bg-[#a6e3a1]/20 text-[#a6e3a1] ring-1 ring-inset ring-[#a6e3a1]/30",
    maintenance:
      "bg-[#f9e2af]/20 text-[#f9e2af] ring-1 ring-inset ring-[#f9e2af]/35",
    assigned:
      "bg-[#89b4fa]/20 text-[#89b4fa] ring-1 ring-inset ring-[#89b4fa]/35",
  };

  return (
    <section className="rounded-2xl border border-[#313244] bg-[#1e1e2e]/95 p-4 text-[#cdd6f4] shadow-[0_12px_28px_rgba(17,17,27,0.45)] backdrop-blur-sm md:p-5">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#f5e0dc]">Equipment Table</h2>
      </header>

      <div className="overflow-x-auto rounded-xl border border-[#313244] bg-[#181825]">
        <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
          <thead className="sticky top-0 z-10 bg-[#11111b]/95">
          <tr>
            <th className="border-b border-[#313244] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#bac2de]">
              ID
            </th>
            <th className="border-b border-[#313244] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#bac2de]">
              Name
            </th>
            <th className="border-b border-[#313244] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#bac2de]">
              Category
            </th>
            <th className="border-b border-[#313244] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#bac2de]">
              Status
            </th>
            <th className="border-b border-[#313244] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#bac2de]">
              Acquisition Date
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="transition-colors odd:bg-[#1e1e2e] even:bg-[#181825] hover:bg-[#313244]/70"
            >
              <td className="border-b border-[#313244] px-4 py-3 text-[#a6adc8]">
                {product.id}
              </td>
              <td className="border-b border-[#313244] px-4 py-3 font-medium text-[#f5e0dc]">
                {product.name}
              </td>
              <td className="border-b border-[#313244] px-4 py-3 text-[#bac2de]">
                {product.category}
              </td>
              <td className="border-b border-[#313244] px-4 py-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusClasses[product.status]}`}
                >
                  {product.status}
                </span>
              </td>
              <td className="border-b border-[#313244] px-4 py-3 text-[#bac2de]">
                {product.acquisitionDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  );
}

export default Table;