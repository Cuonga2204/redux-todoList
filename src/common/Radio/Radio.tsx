import React from "react";
import { RadioProps } from "../../types/todo.types";
const Radio: React.FC<RadioProps> = ({
  id,
  name,
  value,
  checked = false,
  onChange,
  containerClassName,
  label,
}) => {

  return (
    <div className={containerClassName}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="accent-blue-500"
      />
      <label htmlFor={id} className="text-base cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default React.memo(Radio);
