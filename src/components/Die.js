/* eslint-disable react/prop-types */
import React from 'react';

export default function Die({ value, isHeld, handleClick }) {
  const defaultClass =
    'w-8 h-8 flex justify-center items-center rounded shadow-md text-black text-lg font-bold';
  const currentClass = !isHeld
    ? `${defaultClass} bg-neutral-100 hover:bg-neutral-50 cursor-pointer`
    : `${defaultClass} bg-emerald-300`;

  return (
    <button
      type="button"
      className={currentClass}
      onClick={handleClick}
      disabled={isHeld}
    >
      {value}
    </button>
  );
}
