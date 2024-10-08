import Button from 'react-bootstrap/Button';
// Eliminamos la importación de Label ya que no se está utilizando

function Button_type({label, size, variant = "primary"}) {
  return (
    <div className="mb-2">
      <Button variant={variant} size={size}>
        {label}
      </Button>
    </div>
  );
}

export default Button_type;