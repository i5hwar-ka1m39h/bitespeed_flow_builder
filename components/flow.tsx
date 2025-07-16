'use client'

import React, { useEffect, useState }  from 'react'
import {  useCallback } from 'react';
import { ReactFlow,  addEdge, Background, Controls, MiniMap, BackgroundVariant, useReactFlow, Node, Edge,  Connection, useNodesState,  useEdgesState, ReactFlowProvider, NodeChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import cuid from 'cuid';
import MessageNode from './messageNode';

import ProductNode from './productNode';
import CustomerNode from './customerNode';
import { useNodeStore } from '@/store/store';
import Toast from './toast';


const nodeTypes ={
  MessageNode: MessageNode,
  ProductNode: ProductNode,
  CustomerNode:CustomerNode


}
 
const initialNodes:Node[] = [];
const initialEdges:Edge[] = [];

const getId = () => cuid()

const Flow = () => {
    const [nodes, setNodesState, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const {screenToFlowPosition,setNodes } = useReactFlow()

  const [toast, setToast] = useState<{type:"success" | "error" | "warning" |"info", message:string}|null>(null)

  const setSelectedNode = useNodeStore((state)=>state.setSelectedNode)
  const selectedNode = useNodeStore((state)=>state.selectedNode)

//syn store changes with react flow 
  useEffect(()=>{
    if(selectedNode){
      setNodesState((currentNodes)=>
      currentNodes.map((node)=>
      node.id === selectedNode.id ? {...node, data:{...node.data, ...selectedNode.data}} : node ))
    }
  },[selectedNode, setNodesState])

  //syn react flow changes with store
  



  const onNodeClick = (event:React.MouseEvent, node:Node) =>{
    setSelectedNode(node)
  }
 

  
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  const onDragOver = useCallback((e:React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault()
    e.dataTransfer.dropEffect  = "move";
  },[])

  const onDrop = useCallback((e:React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault();

    const nodeData = e.dataTransfer?.getData("application/reactflow")
    if (!nodeData) return;

    const {nodeType}  = JSON.parse(nodeData)
    if(!nodeType) return;

    const position = screenToFlowPosition({
      x:e.clientX,
      y:e.clientY
    })

    const newNode:Node ={
      id: getId(),
      type: nodeType,
      position, 
      data: {label:`${nodeType} node`}
    } 

    setNodesState((nds)=>nds.concat(newNode))
  },[screenToFlowPosition])

  const onNodeChangeHandler = useCallback((changes:NodeChange[])=>{
    onNodesChange(changes)
    if(selectedNode){
      const isDeleted = changes.some(
        (change) =>change.type === "remove" && change.id === selectedNode.id
      )

      if(isDeleted){
        setSelectedNode(null)
      }
    }
  },[onNodesChange, selectedNode, setSelectedNode])

 

  const handleSubmit = () =>{
    if(nodes.length === 0){
      setToast({type:"error", message:"There are no nodes"})
      
      return
    }

    const disconnectedNode = nodes.filter((node)=>{
      const hasIncoming = edges.some((edge)=>edge.target == node.id)
      const hasOutgoing = edges.some((edge)=>edge.source == node.id)
      return !hasIncoming && !hasOutgoing
    })

    if(disconnectedNode.length > 0 ){
      setToast({type:"error", message:"Nodes are not connected"})
    
      return
    }

    setToast({type:"success", message:"Flow saved successfully"})
  }
 


  return (
    <div style={{ width: '100%', height: '100%' }}  >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChangeHandler}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
      
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        
      </ReactFlow>
      <div className=' absolute top-6 right-6 z-10'>
          <button className='border bg-gray-300 rounded-2xl px-5 py-2 z-10' onClick={handleSubmit}>Save flow</button>
        </div>

        {toast && (
          <div className=' absolute right-2 bottom-2'>
            <Toast toastType={toast.type} message={toast.message} onClose={()=>setToast(null)}/>
          </div>
        )}

        
    </div>


  )
}

const FlowWrapper = () =>{
  return(
    <ReactFlowProvider>
      <Flow />
      
    </ReactFlowProvider>
  )
}

export default FlowWrapper





