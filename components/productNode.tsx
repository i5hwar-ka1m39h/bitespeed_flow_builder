import React from 'react'
import PlainNode from './plainNode'

const ProductNode = ({id, data}:{id:string, data:any}) => {
  return (
    <PlainNode id={id} title={"Product list"} description={"curated product list for customer"} inputs={["shopify-store-id"]} outputs={["product-list"]}/>
  )
}

export default ProductNode