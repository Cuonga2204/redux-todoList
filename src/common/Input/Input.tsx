import React from "react";
import { InputProps } from "../../types/todo.types";

export const Input: React.FC<InputProps> = ({
  id,
  name,
  value,
  placeholder,
  onChange,

  className,
}) => {
  return (
    <input
      type="text"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`outline-none px-2.5 py-1 border-gray-200 border-1 w-full ${className}`}
    />
  );
};
