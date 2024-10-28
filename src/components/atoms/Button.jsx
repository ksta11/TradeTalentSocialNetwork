import Button from 'react-bootstrap/Button';

function Button_type({ label, size, variant, className, type = 'submit' }) {
  return (
    <div className="mb-2">
      <Button type={type} variant={variant} size={size} className={className}>
        {label}
      </Button>
    </div>
  );
}

export default Button_type;
