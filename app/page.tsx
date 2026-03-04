import Data from "../data.json"
import Table from '../components/table/table'
import { Product } from '../components/product'

function Page() {
  const products = Data as Product[];

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 via-slate-100 to-slate-100 px-3 py-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 sm:px-5 sm:py-6 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <Table products={products} />
      </div>
    </main>
  );
}

export default Page