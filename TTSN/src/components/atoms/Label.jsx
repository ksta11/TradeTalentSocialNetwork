import React from 'react';
import './Label.css';

export function Label({ htmlFor, children }) {
  return (
    <label className="form-label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}