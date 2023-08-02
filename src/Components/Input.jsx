import React from 'react';

const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border border-gray-400 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
    />
  );
};

export default Input;