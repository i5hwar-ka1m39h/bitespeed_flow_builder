import React, { ReactNode } from 'react'


interface DragNodeProp{
    type:string;
    label:string;
    icon:ReactNode;

}

const DragNode = ({type, label, icon}:DragNodeProp) => {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType:string)=>{
       
        const appData = {nodeType}
        event.currentTarget.style.cursor = "grabbing"
        event.dataTransfer?.setData("application/reactflow", JSON.stringify(appData));
        event.dataTransfer.effectAllowed = 'move'


    }
  return (
    <div  className="rounded-xl bg-white flex flex-col items-center justify-center p-2  min-w-30 cursor-grab shadow"
    onDragStart={(e)=>onDragStart(e, type)}
    onDragEnd={(e)=>(e.currentTarget.style.cursor= 'grab')}
    draggable>
        <span>{icon}</span>
        <span>{label}</span>
    </div>
  )
}

export default DragNode