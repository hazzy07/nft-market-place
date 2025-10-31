import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const Sparkline = ({ data, color = "#22c55e", height = 40, width = 90 }) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data}>
        <Line
          type="linear"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Sparkline;
