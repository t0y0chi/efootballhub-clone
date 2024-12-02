import React from 'react';

interface EditableStatBarProps {
  label: string;
  value: number;
  color: 'green' | 'red' | 'yellow';
  onChange: (newValue: number) => void;
}

export function EditableStatBar({ label, value, color, onChange }: EditableStatBarProps) {
  const getColorClass = (color: string) => {
    const colors = {
      green: 'bg-green-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500'
    };
    return colors[color as keyof typeof colors];
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(99, Math.max(1, parseInt(e.target.value) || 1));
    onChange(newValue);
  };

  return (
    <div className="mb-2">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{label}</span>
        <input
          type="number"
          min="1"
          max="99"
          value={value}
          onChange={handleChange}
          className="w-16 bg-transparent text-right font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1"
        />
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