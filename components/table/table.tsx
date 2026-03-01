import React from "react";
import { Product } from "../product";

type TableProps = {
  products: Product[];
};

function Table({ products }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Nombre</th>
            <th className="border px-4 py-2 text-left">Categoría</th>
            <th className="border px-4 py-2 text-left">Marca</th>
            <th className="border px-4 py-2 text-left">Precio</th>
            <th className="border px-4 py-2 text-left">Estado</th>
            <th className="border px-4 py-2 text-left">Fecha</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.status}</td>
              <td className="border px-4 py-2">{product.acquisitionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;