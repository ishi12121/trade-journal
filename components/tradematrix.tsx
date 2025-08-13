// export const TradeMatrixLogo = ({ size = 200 }) => {
//   return (
//     <div className="flex flex-col items-center space-y-6">
//       {/* Logo Icon */}
//       <div
//         className="relative bg-blue-700 rounded-3xl p-8 shadow-2xl"
//         style={{ width: size, height: size }}
//       >
//         {/* Bar Chart */}
//         <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
//           {/* Grid lines for matrix effect */}
//           <defs>
//             <pattern
//               id="grid"
//               width="20"
//               height="20"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M 20 0 L 0 0 0 20"
//                 fill="none"
//                 stroke="rgba(255,255,255,0.1)"
//                 strokeWidth="0.5"
//               />
//             </pattern>
//           </defs>
//           <rect width="100" height="100" fill="url(#grid)" />

//           {/* Bars */}
//           <rect x="10" y="60" width="15" height="30" fill="white" rx="2" />
//           <rect x="30" y="40" width="15" height="50" fill="white" rx="2" />
//           <rect x="50" y="50" width="15" height="40" fill="white" rx="2" />
//           <rect x="70" y="20" width="15" height="70" fill="white" rx="2" />

//           {/* Trend line */}
//           <path
//             d="M 17.5 75 L 37.5 55 L 57.5 65 L 77.5 25"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             fill="none"
//           />

//           {/* Arrow */}
//           <path
//             d="M 77.5 25 L 85 17.5 M 77.5 25 L 70 17.5"
//             stroke="white"
//             strokeWidth="3"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>

//       {/* App Name */}
//       <h1 className="text-5xl font-bold text-white tracking-tight">
//         TradeMatrix
//       </h1>

//       {/* Tagline */}
//       <p className="text-blue-100 text-lg">Decode Your Trading Patterns</p>
//     </div>
//   );
// };
export const TradeMatrixIcon = ({
  size = 100,
  primaryColor = "var(--primary)", // Use CSS variable
  secondaryColor = "var(--secondary)", // Use CSS variable
  bgColor = "transparent",
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      style={{ backgroundColor: bgColor }}
      className="trade-matrix-icon"
    >
      {/* Grid lines for matrix effect */}

      <>
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke={primaryColor}
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </>

      {/* Bars - Primary Color */}
      <rect
        x="10"
        y="60"
        width="15"
        height="30"
        fill={primaryColor}
        rx="2"
        opacity="0.8"
      />
      <rect
        x="30"
        y="40"
        width="15"
        height="50"
        fill={primaryColor}
        rx="2"
        opacity="0.85"
      />
      <rect
        x="50"
        y="50"
        width="15"
        height="40"
        fill={primaryColor}
        rx="2"
        opacity="0.9"
      />
      <rect x="70" y="20" width="15" height="70" fill={primaryColor} rx="2" />

      {/* Trend line - Secondary Color */}
      <path
        d="M 17.5 75 L 37.5 55 L 57.5 65 L 77.5 25"
        stroke={secondaryColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Arrow - Secondary Color */}
      <path
        d="M 77.5 25 L 85 17.5 M 77.5 25 L 70 17.5"
        stroke={secondaryColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const TradeMatrixLogo = ({ size = 200 }: { size?: number }) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Logo Icon Container - using CSS class */}
      <div
        className="relative bg-secondary/90 rounded-3xl p-8 shadow-2xl flex items-center justify-content-center"
        style={{ width: size, height: size }}
      >
        <TradeMatrixIcon size={size * 0.7} />
      </div>

      {/* App Name - using CSS class */}
      <h1 className="text-5xl font-bold text-secondary tracking-tight">
        TradeMatrix
      </h1>

      {/* Tagline - using CSS class */}

      <p className="text-secondary/50 text-lg opacity-80">
        Decode Your Trading Patterns
      </p>
    </div>
  );
};
