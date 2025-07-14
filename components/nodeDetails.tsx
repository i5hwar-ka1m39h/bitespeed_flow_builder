import { Node } from '@xyflow/react'
import React from 'react'

const NodeDetails = ({selectedNode}:{selectedNode:Node}) => {
  return (
    <div className="space-y-2 text-gray-700 text-sm m-1">
  <div className="border rounded p-2 bg-gray-50 shadow-sm">
    <div className="font-semibold text-indigo-600">Node Details</div>

    <div className="mt-2">
      <div><span className="font-medium text-gray-800">ID:</span> <span className="break-all">{selectedNode.id}</span></div>
      <div><span className="font-medium text-gray-800">Type:</span> {selectedNode.type}</div>
      <div>
        <span className="font-medium text-gray-800">Data:</span>
        <pre className="bg-gray-100 p-1 mt-1 rounded text-xs overflow-auto">
          {JSON.stringify(selectedNode.data, null, 2)}
        </pre>
      </div>
    </div>
  </div>
</div>

  )
}

export default NodeDetails