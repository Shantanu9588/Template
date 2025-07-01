import React from "react";

const SimpleCard = ({
  card_title = "",
  children,
  className = "",
  title_className = "",
  end_section = () => {},
  header_className = "",
}) => {
  return (
    <div
      className={`border border-blue-900-10 bg-grey-100 rounded-xl min-h-[80px] py-4 ${className}`}
    >
      {card_title && (
        <div
          className={`flex items-center justify-between ${header_className}`}
        >
          {typeof card_title === "function" ? (
            card_title()
          ) : (
            <h2
              className={`text-sm font-semibold text-blue-900 ${title_className}`}
            >
              {card_title}
            </h2>
          )}
          {end_section && end_section()}
        </div>
      )}
      {children}
    </div>
  );
};

export default SimpleCard;
