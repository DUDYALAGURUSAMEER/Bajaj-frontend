import React, { useState } from 'react';
import axios from 'axios';

const Input = ({ setResponseData }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const parsedJson = JSON.parse(jsonInput);
      const response = await axios.post('http://localhost:3001/bfhl', parsedJson); // Ensure this URL is correct
      setResponseData(response.data);
    } catch (err) {
      setError('Invalid JSON format or API error.');
    }
  };

  return (
    <div>
      <h2>Enter JSON Input:</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          value={jsonInput}
          onChange={handleInputChange}
          placeholder='{ "data": ["A","C","z"] }'
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Input;
