import React from 'react';
import './Campo_entrada.css';

export function campo_entrada({ type, id, name, value, onChange, required }) {
  return (
    <input
      className="form-input"
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}