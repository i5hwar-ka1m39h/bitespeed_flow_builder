import type { Node } from '@xyflow/react'
import React from 'react'

const CustomerDetails = ({node}:{node:Node}) => {
  return (
     <div>Additonal changes for the customer node: <span className='bg-red-300 px-2 rounded-2xl'>to be</span></div>
  )
}

export default CustomerDetails