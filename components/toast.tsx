import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineInfoCircle, AiOutlineWarning, AiOutlineExclamationCircle } from 'react-icons/ai';
import React from 'react'

const icons = {
  success: <AiOutlineCheckCircle className="text-green-500" size={20} />,
  error: <AiOutlineExclamationCircle className="text-red-500" size={20} />,
  warning: <AiOutlineWarning className="text-yellow-500" size={20} />,
  info: <AiOutlineInfoCircle className="text-blue-500" size={20} />,
};

const bgColors = {
  success: 'bg-green-50 border-green-400',
  error: 'bg-red-50 border-red-400',
  warning: 'bg-yellow-50 border-yellow-400',
  info: 'bg-blue-50 border-blue-400',
};

const Toast = ({toastType="info", message, onClose}:{
    toastType: "success" | "error" | "warning" |"info",
    message:string,
    onClose?:()=>void
}) => {
  return (
     <div className={`flex items-center border-l-4 p-4 rounded shadow-md mb-2 ${bgColors[toastType]}`}>
      <div className="mr-3">{icons[toastType]}</div>
      <div className="flex-1 text-gray-800 text-sm">{message}</div>
      {onClose && (
        <button className="ml-3 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <AiOutlineClose size={16} />
        </button>
      )}
    </div>
  
  )
}

export default Toast