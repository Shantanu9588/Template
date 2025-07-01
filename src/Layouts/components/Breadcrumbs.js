import React from "react";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <a href={item.href} className="text-base font-medium text-blue-900-85 hover:text-blue-600">
                {item.label}
              </a>
            ) : (
              <span className="text-base font-medium text-blue-900">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="text-base text-blue-900-85 font-medium mx-2 text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
