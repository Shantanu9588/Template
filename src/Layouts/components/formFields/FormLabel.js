import React from "react";

const FormLabel = ({ title, endIcon, className = "" }) => {
  return (
    <div className="flex items-center justify-between">
      <label className={`text-xs font-medium text-blue-900 ${className}`}>
        {title}
      </label>
      {endIcon && endIcon()}
    </div>
  );
};

export default FormLabel;
