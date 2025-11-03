import React from "react";

const GridTable = ({ columns, data, className = "" }) => {
  if (!columns || !Array.isArray(columns) || columns.length === 0) return null;
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  const gridStyle = {
    gridTemplateColumns: `4fr repeat(${columns.length - 1}, 1fr)`,
  };

  return (
    <div className={`w-full bg-black text-white ${className}`}>
      <div className="overflow-x-auto max-w-full lg:overflow-x-visible hide-scroll">
        <div className="min-w-[800px] lg:min-w-0">
          <div
            className="grid py-1 border-t border-[#2D2E31] font-semibold text-sm"
            style={gridStyle}
          >
            {columns.map((col, index) => (
              <div key={index} className="py-3 whitespace-nowrap">
                {col}
              </div>
            ))}
          </div>

          {data.map((row, rIndex) => (
            <div key={rIndex} className="grid text-sm" style={gridStyle}>
              {row.map((cell, cIndex) => (
                <div
                  key={cIndex}
                  className="p-2 border-t border-[#2D2E31] whitespace-nowrap"
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default GridTable;
