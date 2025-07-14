import React from 'react'
import { Handle,  Position, useReactFlow } from '@xyflow/react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { cn } from '@/libs/utils';



const PlainNode = ({id, title , description, icon, inputs=[], outputs=[], children, className=""}:any) => {
    const {deleteElements} = useReactFlow()
  return (
    <div className={cn(
                'w-84 p-3 rounded-md border border-gray-300 bg-white shadow-sm text-sm ',
                className
            )}>
        {/* Title */}
            <div className="bg-indigo-100 p-2 border border-indigo-500 rounded">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-3xl">{icon}</span>
                        <span className="font-semibold ">{title}</span>
                    </div>


                    <div className="flex items-center justify-center gap-1" >
                        
                        <button onClick={()=>deleteElements({nodes:[{id}]})}><IoIosCloseCircleOutline size={20} /></button>

                    </div>
                </div>

                <div >{description}</div>
            </div>


            {/* children */}

            <div> {children}</div>


            {/* handles */}
            {
               inputs.map((id:string,i:number)=>(
                <Handle 
                key={`input-${id}-${i}`} 
                position={Position.Left} 
                type='source' 
                id={id} 
                style={{ top: 20+ i * 50 , width:12, height:12 , background:"white", border:"1px solid black",}}/>
               )) 
            }

            {
               outputs.map((id:string,i:number)=>(
                <Handle 
                key={`output-${id}-${i}`} 
                position={Position.Right} 
                type='target' 
                id={id} 
                style={{ top: 40+ i * 20 , width:12, height:12 , background:"white", border:"1px solid black",}}/>
               )) 
            }


    </div>
  )
}

export default PlainNode