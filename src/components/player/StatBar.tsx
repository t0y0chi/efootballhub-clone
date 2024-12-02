import React from 'react';

interface StatBarProps {
  label: string;
  value: number;
  color: 'green' | 'red' | 'yellow';
}

export function StatBar({ label, value, color }: StatBarProps) {
  const getColorClass = (color: string) => {
    const colors = {
      green: 'bg-green-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="mb-2">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="font-semibold">{value}</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColorClass(color)} rounded-full transition-all duration-300`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}