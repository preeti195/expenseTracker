// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import CustomTooltip from "./CustomTooltip";
// import CustomLegend from "./CustomLegend";

// const CustomPieChart = ({
//   data,
//   label,
//   totalAmount,
//   colors,
//   showTextAnchor,
// }) => {
//   return (<ResponsiveContainer width="100%" height={380}>
//   <PieChart>
//     <Pie
//       data={data}
//       dataKey="amount"
//       nameKey="name"
//       cx="50%"
//       cy="50%"
//       outerRadius={130}
//       innerRadius={100}
//       labelLine={false}
//     >
//       {data.map((entry, index) => (
//         <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//       ))}
//     </Pie>
//     <Tooltip content={CustomTooltip} />
//     <Legend content={CustomLegend}/>
//     {showTextAnchor && (
//         <>
//   <text
//     x="50%"
//     y="50%"
//     dy={-25}
//     textAnchor="middle"
//     fill="#666"
//     fontSize="14px"
//   >
//     {label}
//   </text>
//   <text
//     x="50%"
//     y="50%"
//     dy={8}
//     textAnchor="middle"
//     fill="#333"
//     fontSize="24px"
//     fontWeight="semi-bold"
//    >
//     {totalAmount}
//     </text>
//     </>
//     )}
//   </PieChart>
// </ResponsiveContainer>)

// };

// export default CustomPieChart;
// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";
// import CustomTooltip from "./CustomTooltip";
// import CustomLegend from "./CustomLegend";

// const CustomPieChart = ({
//   data,
//   label,
//   totalAmount,
//   colors,
//   showTextAnchor,
// }) => {
//   return (
//     <div className="relative w-full h-[380px] flex justify-center items-center">
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart>
//           <Pie
//             data={data}
//             dataKey="amount"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={130}
//             innerRadius={100}
//             labelLine={false}
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={colors[index % colors.length]}
//               />
//             ))}
//           </Pie>
//           <Tooltip content={CustomTooltip} />
//           <Legend content={CustomLegend} />
//         </PieChart>
//       </ResponsiveContainer>

//       {/* HTML-centered text */}
//       {showTextAnchor && (
//         <div className="absolute text-center">
//           <p className="text-sm text-gray-600">{label}</p>
//           <p className="text-xl font-semibold text-gray-800">
//   {typeof totalAmount === "number" ? `₹${totalAmount}` : totalAmount}
// </p>

//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomPieChart;
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  // Function to format amount in rupees
  const formatAmountInRupees = (amount) => {
    if (typeof amount === "number") {
      return `₹${amount.toLocaleString('en-IN')}`;
    }
    
    // Extract numeric value from string (removes any existing currency symbols)
    const numericValue = parseFloat(amount.toString().replace(/[^0-9.-]+/g, ''));
    
    if (isNaN(numericValue)) {
      return '₹0';
    }
    
    return `₹${numericValue.toLocaleString('en-IN')}`;
  };

  return (
    <div className="relative w-full h-[380px] flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={CustomTooltip} />
          <Legend content={CustomLegend} />
        </PieChart>
      </ResponsiveContainer>
      {/* HTML-centered text */}
      {showTextAnchor && (
        <div className="absolute text-center">
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-xl font-semibold text-gray-800">
            {formatAmountInRupees(totalAmount)}
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomPieChart;