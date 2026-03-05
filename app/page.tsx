"use client";

import React from 'react';
import Data from "../data.json"
import Table from '../components/table'
import { Product } from '../components/product'
import GenericCard from "@/components/cards/genericCard";

function Page() {
  const [products, setProducts] = React.useState<Product[]>([]);
  React.useEffect(() => {
    setProducts(Data as Product[]);
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-slate-100 to-slate-100 px-3 py-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 sm:px-5 sm:py-6 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <GenericCard label="Total Products" value={products.length} />
          <GenericCard label="Available" value={products.filter(p => p.status === "available").length} color="green" />
          <GenericCard label="In Maintenance" value={products.filter(p => p.status === "maintenance").length} color="yellow" />
          <GenericCard label="Assigned" value={products.filter(p => p.status === "assigned").length} color="blue" />
        </div>
        <Table products={products} setProducts={setProducts} />
      </div>
    </main>
  );
}

export default Page