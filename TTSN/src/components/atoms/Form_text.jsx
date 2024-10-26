import React, { forwardRef } from 'react';
import Form from 'react-bootstrap/Form';

const FormTextField = forwardRef(({ label, id, type, ariaDescribedby, helpText, ...props }, ref) => {
  return (
    <>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        type={type}
        id={id}
        aria-describedby={ariaDescribedby}
        ref={ref}
        {...props}
      />
      <Form.Text id={ariaDescribedby} muted>
        {helpText}
      </Form.Text>
    </>
  );
});

export default FormTextField;
