import React from 'react';

const Dropdown = ({ options, onSelect }) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;





