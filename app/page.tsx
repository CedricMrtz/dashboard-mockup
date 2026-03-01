import React from 'react'
import Data from "../data.json"
import Table from '../components/table/table'
import { Product } from '../components/product'

function Page() {
  const products = Data as Product[];

  return (
    <div className="p-4">
      <Table products={products}/>
    </div>
  )
}

export default Page