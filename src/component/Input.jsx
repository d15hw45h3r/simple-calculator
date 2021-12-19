import React from 'react';

const Input = ({ name, label, value, placeholder, handleChange, input, operations }) => {
  return (
    <div className='input'>
      {input ? (
        <>
          <label htmlFor={name}>{label}</label>
          <input id={name} type='number' name={name} value={value} placeholder={placeholder} onChange={handleChange} />
        </>
      ) : (
        <>
          <label htmlFor={name}>{label}</label>
          <select id={name} name={name} value={value} onChange={handleChange}>
            <option value=''>Select</option>
            {operations.map((operation) => (
              <option key={operation} value={operation}>
                {operation}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};

export default Input;
