import { extractVar } from '@/libs/varExtractor'
import { useNodeStore } from '@/store/store'
import type { Node } from '@xyflow/react'
import React, {useEffect, useState} from 'react'

interface NodeEditorProps{
    node:Node
}

const MessageNodeDetails = ({node}:NodeEditorProps) => {
    const updateSelectedNodeData = useNodeStore((state)=>state.updateSelectedNodeData)
    const [text, setText] = useState("")
    const [inputVars, setInputVars] = useState<string[]>([])

    useEffect(()=>{
        setText(node.data?.text as string  || "")
    },[node])

    useEffect(()=>{
        const vars = extractVar(text)
        setInputVars(vars as string[])

    },[text])

    const handleTextChange = (newText: string) =>{
        setText(newText)
        const vars = extractVar(newText)
        updateSelectedNodeData({
            text: newText,
            inputVars: vars,
            label : "message"
        })
    }
  return (
    <div className="flex flex-col gap-2 p-2">

    <textarea
      value={text}
      onChange={(e) => handleTextChange(e.target.value)}
      placeholder="Please enter your message here"
      className="w-full border rounded p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
      rows={3}
    />

    {inputVars.length > 0 && (
      <div>
        <p className="text-xs font-semibold text-gray-500 mb-1">Variables used:</p>
        <ul className="list-disc list-inside text-xs text-gray-700">
          {inputVars.map((each) => (
            <li key={each} className="truncate">{each}</li>
          ))}
        </ul>
      </div>
    )}

  </div>
  )
}

export default MessageNodeDetails