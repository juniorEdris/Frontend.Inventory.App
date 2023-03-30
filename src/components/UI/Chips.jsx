import React from "react";

export const Chips = ({ id = 0, title = "", className = "" }) => {
  return (
    <span
      className={`text-sm [word-wrap: break-word] py-1 mr-4   rounded-[16px] bg-green-600 px-[12px] text-[13px] font-normal normal-case leading-loose text-light shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none ${className}`}
      key={id}
    >
      {title}
    </span>
  );
};
