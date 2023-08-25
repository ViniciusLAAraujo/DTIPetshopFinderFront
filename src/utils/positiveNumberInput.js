import React from 'react';
import { Form } from 'react-bootstrap';

function PositiveNumberInput({ label, value, onChange }) {
  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue) && inputValue >= 0) {
      onChange(inputValue);
    }
  };

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="number" value={value} onChange={handleInputChange} />
    </Form.Group>
  );
}

export default PositiveNumberInput;