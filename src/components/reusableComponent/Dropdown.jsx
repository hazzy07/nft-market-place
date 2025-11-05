import React, { useState, useRef, useEffect } from "react";
import { IoCaretDownOutline } from "react-icons/io5";

const Dropdown = ({ items, placeholder, onSelect, className = "" }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [dropUp, setDropUp] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!open && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      // Flip up if not enough space below
      setDropUp(spaceBelow < 150 && spaceAbove > spaceBelow);
    }
    setOpen(!open);
  };

  const handleClick = (item) => {
    setSelected(item);
    setOpen(false);
    if (onSelect) onSelect(item);
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={ref}>
      <div
        onClick={handleToggle}
        className="flex gap-1 justify-between items-center px-2 py-1 bg-transparent border border-[#FFFFFF10] text-gray-200 rounded-md cursor-pointer hover:border-gray-500 transition-all"
      >
        {/* <span className="truncate">{selected || placeholder}</span> */}
        {selected ? (
          <span className="truncate">{selected}</span>
        ) : (
          <div className="flex items-center gap-2">
            {placeholder?.image && (
              <img
                src={placeholder.image}
                alt="placeholder"
                className="w-5 h-5 rounded-full"
              />
            )}
            <span className="font-inter font-[400] text-[12px] ">{placeholder?.label || placeholder}</span>
          </div>
        )}

        <IoCaretDownOutline
          fontSize="10px"
          className={`transform transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {open && (
        <div
          className={`absolute w-full bg-[#1e1e1e] border border-gray-700 rounded-md shadow-lg z-[9999] ${
            dropUp ? "bottom-full mb-2" : "mt-2"
          }`}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(item)}
              className="px-3 py-2 text-gray-200 hover:bg-[#2b2b2b] hover:text-yellow-300 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
