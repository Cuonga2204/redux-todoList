import React from 'react'
import { ButtonProps } from '../../types/todo.types'
import { memo } from 'react';
 const Button:React.FC<ButtonProps> = ({onClick, disabled=false, className, children}) => {
    return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border-1 border-gray-200 text-white cursor-pointer p-1.5 ${className} ${
        disabled ? "bg-blue-200 cursor-not-allowed" : "bg-blue-500"
      }`}
    >
      {children}
    </button>
  )
}
export default memo(Button);