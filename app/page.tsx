"use client";

import React from 'react';
import Data from "../data.json"
import Table from '../components/table'
import { Product } from '../components/product'
import GenericCard from "@/components/cards/genericCard";
import GraphCard from "@/components/cards/graphCard";

function Page() {
  const [products, setProducts] = React.useState<Product[]>([]);
  React.useEffect(() => {
    setProducts(Data as Product[]);
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-b from-[#11111b] via-[#181825] to-[#1e1e2e] px-3 py-4 sm:px-5 sm:py-6 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1 xl:grid-cols-2">
            <GenericCard label="Total Products" value={products.length} className="min-h-32" />
            <GenericCard
              label="Products in Maintenance"
              value={products.filter((p) => p.status === "maintenance").length}
              color="yellow"
              className="min-h-32"
            />
            <GenericCard
              label="Assigned Products"
              value={products.filter((p) => p.status === "assigned").length}
              color="green"
              className="min-h-32"
            />
            <GenericCard
              label="Available Products"
              value={products.filter((p) => p.status === "available").length}
              color="blue"
              className="min-h-32"
            />
          </div>
          <div className="lg:col-span-2">
            <GraphCard products={products} className="min-h-[272px]" />
          </div>
        </div>
        <Table products={products} setProducts={setProducts} />
      </div>
    </main>
  );
}

export default Page