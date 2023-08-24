import React, { useState } from "react";

const Dropdown = ({ options, value, setValue }) => {
  const [openDropdown, setopenDropdown] = useState(false);
  return (
    <div className="relative">
      <button
        className="py-2 px-6 bg-gray-100 rounded-md flex flex-row gap-2 justify-center items-center"
        onClick={() => {
          setopenDropdown(!openDropdown);
        }}
      >
        {value}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {openDropdown && (
        <div className="absolute right-0 transition-all shadow-lg z-10">
          <ul className=" bg-white rounded-md">
            {options.map((option) => (
              <li>
                <button
                  className="py-2 px-4 hover:bg-gray-50"
                  onClick={() => {
                    setValue(option);
                    setopenDropdown(false);
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
