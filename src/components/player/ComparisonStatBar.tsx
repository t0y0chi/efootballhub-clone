import React from 'react';

interface ComparisonStatBarProps {
  label: string;
  value1: number;
  value2: number;
}

export function ComparisonStatBar({ label, value1, value2 }: ComparisonStatBarProps) {
  const difference = value1 - value2;
  const getDifferenceColor = (diff: number) => {
    if (diff > 0) return 'text-green-400';
    if (diff < 0) return 'text-red-400';
    return 'text-gray-400';
  };

  return (
    <div className="relative">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{label}</span>
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-blue-400">{value1}</span>
          <span className={`${getDifferenceColor(difference)} w-8 text-center`}>
            {difference > 0 ? `+${difference}` : difference}
          </span>
          <span className="font-semibold text-purple-400">{value2}</span>
        </div>
      </div>
      <div className="flex h-2 bg-gray-700/50 rounded-full overflow-hidden">
        <div className="w-1/2 flex justify-end">
          <div
            className="h-full bg-blue-500 rounded-l-full transition-all duration-300"
            style={{ width: `${value1}%` }}
          />
        </div>
        <div className="w-1/2">
          <div
            className="h-full bg-purple-500 rounded-r-full transition-all duration-300"
            style={{ width: `${value2}%` }}
          />
        </div>
      </div>
    </div>
  );
}