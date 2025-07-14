import React from 'react'
import PlainNode from './plainNode'

const CustomerNode = ({id, data}:{id:string, data:any}) => {
  return (
    <PlainNode id={id} title={"Customer list"} description={"get customer details from shopify"} inputs={["shopify-store-id"]} outputs={["customer-details"]}/>
  )
}

export default CustomerNode