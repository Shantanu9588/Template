import React from "react";

const Tabs = ({
  tab_list = [],
  active_tab,
  onChange,
  active_className,
  inactive_className,
  parent_className,
  tab_className,
}) => {
 
  return (
    <div
      className={
        parent_className
          ? parent_className
          : `flex space-x-2 bg-gray-100 rounded-t-lg border-b border-b-gray-300`
      }
    >
      {tab_list?.map((tab) => (
        <button
          key={tab?.id}
          onClick={() => onChange(tab)}
          className={`
            ${
              tab_className
                ? tab_className
                : "px-4 py-2 text-sm font-medium rounded-t-xl transition-colors duration-200 cursor-pointer border border-gray-300 border-b-0"
            }
            ${
              active_tab?.id === tab?.id
                ? active_className
                  ? active_className
                  : "text-[#5F33D6] bg-white border-b-white"
                : inactive_className
                ? inactive_className
                : "text-gray-700 hover:bg-white"
            }`}
        >
          {tab?.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
