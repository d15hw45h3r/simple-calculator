import { useState } from 'react';
import './App.css';
import Form from './component/Form';

function App() {
  const operations = ['+', '-', '*', '/'];
  const [inputValues, setInputValues] = useState({
    firstArgument: '',
    secondArgument: '',
    operation: '',
  });
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    const value = { ...inputValues };
    value[input.name] = input.value;
    setInputValues(value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstArgument, secondArgument, operation } = { ...inputValues };
    if (firstArgument === '' || secondArgument === '' || operation === '') {
      setError('Please fill out all fields and try again.');
    } else {
      const result = calculateResult(firstArgument, secondArgument, operation);
      setResult(result);
      setInputValues({
        firstArgument: '',
        secondArgument: '',
        operation: '',
      });
    }
  };

  const calculateResult = (first, second, option) => {
    let result = '',
      firstArgument = Number.parseInt(first),
      secondArgument = Number.parseInt(second);
    switch (option) {
      case '+':
        result = firstArgument + secondArgument;
        break;
      case '-':
        result = firstArgument - secondArgument;
        break;
      case '*':
        result = firstArgument * secondArgument;
        break;
      case '/':
        result = firstArgument / secondArgument;
        break;
      default:
        return setError('Sorry, this operation is not supported');
    }
    return `${first} ${option} ${second} = ${Number.parseInt(result)}`;
  };

  return (
    <div className='container'>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} operations={operations} value={inputValues} />
      <div>
        {result === '' ? null : <p className='result'>Result: {result}</p>}
        {error === '' ? null : <p className='error'>{error}</p>}
      </div>
    </div>
  );
}

export default App;
