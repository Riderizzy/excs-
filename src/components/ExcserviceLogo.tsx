import { motion } from 'motion/react';

export const ExcserviceLogo = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="2" width="28" height="28" rx="8" stroke={color} strokeWidth="2.5" />
    <text x="16" y="12" fontSize="9" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>ex</text>
    <text x="16" y="22" fontSize="9" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>cs</text>
  </svg>
);
