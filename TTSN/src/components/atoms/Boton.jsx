import './boton.css';

export function boton({ type, onClick, children }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}