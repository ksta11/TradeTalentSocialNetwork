import Form from 'react-bootstrap/Form';

function FormTextField({label, id, type, ariaDescribedby, helpText}) {
  return (
    <>
    <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
    <Form.Control
        type={type}
        id={id}
        aria-describedby={ariaDescribedby}
      />
      <Form.Text id={ariaDescribedby} muted>
        {helpText}
      </Form.Text>
    </>
  );
}

export default FormTextField;