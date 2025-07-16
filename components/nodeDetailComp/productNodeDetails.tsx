import type{ Node } from '@xyflow/react'
import React from 'react'

const ProductNodeDetails = ({node}:{node:Node}) => {
  return (
    <div>Additonal changes for the product node: <span className='bg-red-300 rounded-2xl px-2'>to be</span></div>
  )
}

export default ProductNodeDetails