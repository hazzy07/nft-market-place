import React, { useState, useRef, useEffect } from "react";
import { IoCaretDownOutline } from "react-icons/io5";

const Dropdown = ({
  items,
  placeholder,
  onSelect,
  renderItem,
  className = "",
  noBorder = false,
  paddingY = "py-2",
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
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
        className={`flex gap-1 justify-between items-center px-2 ${paddingY} bg-transparent text-gray-200 rounded-md cursor-pointer transition-all 
          ${noBorder ? "" : "border border-[#FFFFFF10] hover:border-gray-500"}`}
      >
        {selected ? (
          <div className="flex items-center gap-2 truncate">
            {selected.image && (
              <img
                src={selected.image}
                alt={selected.label}
                className="w-5 h-5 rounded-full"
              />
            )}
            <span>{selected.label}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {placeholder?.image && (
              <img
                src={placeholder.image}
                alt="placeholder"
                className="w-5 h-5 rounded-full"
              />
            )}
            <span className="font-inter font-[400] text-[14px]">
              {placeholder?.label || placeholder}
            </span>
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
              className="px-3 py-2 font-inter text-[14px] text-gray-200 hover:bg-[#2b2b2b] hover:text-yellow-300 cursor-pointer flex items-center gap-2"
            >
              {renderItem ? renderItem(item) : <span>{item.label}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
