"use client"

import { Product } from "../product";
import React from "react";

type TableProps = {
  products: Product[];
};

function Table({ products }: TableProps) {
  const [isSearching, setIsSearching] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isAdding, setIsAdding] = React.useState(false);
  const [newProduct, setNewProduct] = React.useState<Omit<Product, "id">>({
    name: "",
    category: "",
    status: "available",
    acquisitionDate: "",
  });
  const [newProducts, setProducts] = React.useState<Product[]>(products);

  const statusClasses: Record<Product["status"], string> = {
    available:
      "bg-[#a6e3a1]/20 text-[#a6e3a1] ring-1 ring-inset ring-[#a6e3a1]/30",
    maintenance:
      "bg-[#f9e2af]/20 text-[#f9e2af] ring-1 ring-inset ring-[#f9e2af]/35",
    assigned:
      "bg-[#89b4fa]/20 text-[#89b4fa] ring-1 ring-inset ring-[#89b4fa]/35",
  };

  const filteredProducts = newProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.status.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section 
      className="rounded-2xl border border-[#313244] bg-[#1e1e2e]/95 p-3 text-[#cdd6f4] shadow-[0_12px_28px_rgba(17,17,27,0.45)] backdrop-blur-sm sm:p-4 md:p-5"
      onClick={() => isSearching ? setIsSearching(false) : null}>
      {/* Header */}
      <header className="mb-4 flex flex-wrap items-center gap-2">
        <h2 className="text-base font-semibold text-[#f5e0dc] sm:text-lg">
          Equipment Table        
        </h2>
        <div className="ml-auto flex items-center gap-2">
          { isAdding ? (
            <button
              onClick={() => {
                setIsAdding(false);
                setNewProduct({
                  name: "",
                  category: "",
                  status: "available",
                  acquisitionDate: "",
                });
              }}
              className="rounded-full border border-[#7f849c]/50 bg-[#313244] px-2.5 py-1 text-[11px] font-medium text-[#cdd6f4] sm:px-3 sm:text-xs hover:bg-[#313244]/70 focus:outline-none focus:ring-2 focus:ring-[#89b4fa]/50"
            >
              Cancel
            </button>
          ) : (
            <button
              onClick={() => {
                setIsAdding(true);
              }}
              className="rounded-full border border-[#7f849c]/50 bg-[#313244] px-2.5 py-1 text-[11px] font-medium text-[#cdd6f4] sm:px-3 sm:text-xs hover:bg-[#313244]/70 focus:outline-none focus:ring-2 focus:ring-[#89b4fa]/50"
            >
              Add row
            </button>
          )}

          { isSearching ? (
            <input 
              ref={inputRef}
              type="text" 
              className="rounded-full border border-[#7f849c]/50 bg-[#313244] px-2.5 py-1 text-[11px] font-medium text-[#cdd6f4] sm:px-3 sm:text-xs"
              placeholder="Search equipment..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />  
          ) : (
            <button
              onClick={() => {
                setIsSearching(true);
                setTimeout(() => inputRef.current?.focus(), 100);
              }}
              className="rounded-full border border-[#7f849c]/50 bg-[#313244] px-2.5 py-1 text-[11px] font-medium text-[#cdd6f4] sm:px-3 sm:text-xs hover:bg-[#313244]/70 focus:outline-none focus:ring-2 focus:ring-[#89b4fa]/50"
            >
              Search
            </button>
          )}
          
          <span className="rounded-full border border-[#7f849c]/50 bg-[#313244] px-2.5 py-1 text-[11px] font-medium text-[#cdd6f4] sm:px-3 sm:text-xs">
            {filteredProducts.length} records
          </span>
        </div>
      </header>
      {isAdding && (
        <div className="mb-4 grid grid-cols-1 gap-2 rounded-xl border border-[#313244] bg-[#181825] p-3 sm:grid-cols-2 lg:grid-cols-5">
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="rounded-lg border border-[#7f849c]/50 bg-[#313244] px-3 py-2 text-xs text-[#cdd6f4] placeholder:text-[#6c7086] focus:outline-none focus:ring-2 focus:ring-[#89b4fa]/40"
          />
          <input
            type="text"
            placeholder="Category"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            className="rounded-lg border border-[#7f849c]/50 bg-[#313244] px-3 py-2 text-xs text-[#cdd6f4] placeholder:text-[#6c7086] focus:outline-none focus:ring-2 focus:ring-[#89b4fa]/40"
          />
          <select
            value={newProduct.status}
            onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value as Product["status"] })}
            className="rounded-lg border border-[#7f849c]/50 bg-[#313244] px-3 py-2 text-xs text-[#cdd6f4] focus:outline-none focus:ring-2 focus:ring-[#89b4fa]/40"
          >
            <option value="available">Available</option>
            <option value="maintenance">Maintenance</option>
            <option value="assigned">Assigned</option>
          </select>
          <input
            type="date"
            value={newProduct.acquisitionDate}
            onChange={(e) => setNewProduct({ ...newProduct, acquisitionDate: e.target.value })}
            className="rounded-lg border border-[#7f849c]/50 bg-[#313244] px-3 py-2 text-xs text-[#cdd6f4] focus:outline-none focus:ring-2 focus:ring-[#89b4fa]/40"
          />
          <button
            onClick={() => {
              if (newProduct.name && newProduct.category && newProduct.status && newProduct.acquisitionDate) {
                const newId = newProducts.length > 0 ? Math.max(...newProducts.map((p) => p.id)) + 1 : 1;
                setProducts([...newProducts, { id: newId, ...newProduct }]);
                setIsAdding(false);
                setNewProduct({ name: "", category: "", status: "available", acquisitionDate: "" });
              }
            }}
            className="rounded-lg border border-[#a6e3a1]/40 bg-[#a6e3a1]/10 px-3 py-2 text-xs font-medium text-[#a6e3a1] hover:bg-[#a6e3a1]/20 focus:outline-none focus:ring-2 focus:ring-[#a6e3a1]/40 transition-colors"
          >
            Save
          </button>
  </div>
      )}
      {/* View on mobile */}
      <div className="grid gap-3 sm:hidden">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="rounded-xl border border-[#313244] bg-[#181825] p-3"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-[#f5e0dc]">{product.name}</p>
              <span className="text-xs text-[#a6adc8]">#{product.id}</span>
            </div>
            <p className="mt-1 text-xs text-[#bac2de]">{product.category}</p>
            <div className="mt-3 flex items-center justify-between gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusClasses[product.status]}`}
              >
                {product.status}
              </span>
              <span className="text-xs text-[#a6adc8]">{product.acquisitionDate}</span>
            </div>
          </article>
        ))}
      </div>

      {/* View on desktop */}
      <div className="hidden overflow-x-auto rounded-xl border border-[#313244] bg-[#181825] sm:block">
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
          {filteredProducts.map((product) => (
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