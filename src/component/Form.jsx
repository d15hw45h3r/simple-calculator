import React from 'react';
import Input from './Input';

const Form = ({ handleSubmit, handleChange, operations, value }) => {
  return (
    <div className='form'>
      <form>
        <Input
          name='firstArgument'
          label='First number'
          value={value.firstArgument}
          placeholder='First number'
          handleChange={handleChange}
          input={true}
        />
        <Input
          name='secondArgument'
          label='Second number'
          value={value.secondArgument}
          placeholder='Second number'
          handleChange={handleChange}
          input={true}
        />
        <Input name='operation' label='Operation' value={value.operation} handleChange={handleChange} input={false} operations={operations} />
 
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
