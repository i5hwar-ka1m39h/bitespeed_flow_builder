'use client'

import React  from 'react'
import {  useCallback } from 'react';
import { ReactFlow,  addEdge, Background, Controls, MiniMap, BackgroundVariant, useReactFlow, Node, Edge,  Connection, useNodesState,  useEdgesState, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import cuid from 'cuid';
import MessageNode from './messageNode';

import ProductNode from './productNode';
import CustomerNode from './customerNode';

const nodeTypes ={
  MessageNode: MessageNode,
  ProductNode: ProductNode,
  CustomerNode:CustomerNode


}
 
const initialNodes:Node[] = [];
const initialEdges:Edge[] = [];

const getId = () => cuid()

const Flow = ({setSelectedNode}:any) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const {screenToFlowPosition} = useReactFlow()

  const onNodeClick = useCallback((e:React.MouseEvent, node:Node)=>{
    setSelectedNode(node)
  },[setSelectedNode])
 

  
 
  
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

    setNodes((nds)=>nds.concat(newNode))
  },[screenToFlowPosition])



 


  return (
    <div style={{ width: '100%', height: '100%' }} >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
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
    </div>
  )
}

const FlowWrapper = ({setSelectedNode}:any) =>{
  return(
    <ReactFlowProvider>
      <Flow setSelectedNode={setSelectedNode}/>
      
    </ReactFlowProvider>
  )
}

export default FlowWrapper
