import React from 'react';

function Input({ label, type = 'text', placeholder }) {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="text-lg font-semibold mb-1 text-gray-600">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-400 rounded px-3 py-2  text-black focus:outline-none focus:border-[#1F4B43]"
      />
    </div>
  );
}

export default Input;
