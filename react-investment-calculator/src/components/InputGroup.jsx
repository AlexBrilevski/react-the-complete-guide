import { useState } from 'react';

export default function InputGroup({ fieldId, userInput, handleChange, label, ...props }) {
  const [value, setValue] = useState(userInput);

  function onChange(e) {
    const newValue = e.currentTarget.value;

    setValue(newValue);
    handleChange(fieldId, newValue);
  }

  return (
    <p>
      <label>{label}</label>
      <input value={value} onChange={onChange} {...props} />
    </p>
  );
};
