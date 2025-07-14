import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import DragNode from './dragNode';
import { FaShopify } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";

const toolbarItem = [
    {
        id: 1,
        type: 'MessageNode', label: 'Message',
        icon: <FaWhatsapp/>
    },
    {
        id: 2,
        type: 'CustomerNode', label: 'Customer List',
        icon: <IoPersonCircle />
    },
    {
        id: 3,
        type: 'ProductNode', label: 'Product List',
        icon: <FaShopify/>
    }
]

const Toolbar = () => {
  return (
    <div className='flex items-center justify-start  gap-5 px-20 py-5'>{
        toolbarItem.map((each)=>(
            <div key={each.id}>
                <DragNode icon={each.icon} label={each.label} type={each.type} key={each.id} />
            </div>
        ))
        }</div>
  )
}

export default Toolbar