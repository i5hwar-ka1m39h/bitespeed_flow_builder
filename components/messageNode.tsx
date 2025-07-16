import React, { useEffect, useState } from 'react'
import PlainNode from './plainNode'
import { FaWhatsapp } from "react-icons/fa";
import { extractVar } from '@/libs/varExtractor';
import { useNodeStore } from '@/store/store';



const MessageNode = ({ id, data }: { id: string, data: any }) => {
  const [text, setText] = useState(data?.text || "")
  const [inputVars, setInputVars] = useState<string[]>([])

  const updateSelectedNodeData = useNodeStore((state) => state.updateSelectedNodeData)
 

 

  
  const handleTextChange = (newText: string) => {
    setText(newText);
    const vars = extractVar(newText);
    setInputVars(vars as string[]);
    updateSelectedNodeData({
      text: newText,
      inputVars: vars,
      label: "message",
    });
  };



  


  return (
    <PlainNode
      id={id}
      title="Message"
      description="Create message text"
      inputs={inputVars}
      outputs={["text"]}
      icon={<FaWhatsapp />}
    >
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
    </PlainNode>

  )
}

export default MessageNode