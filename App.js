import React, { useState } from 'react';
import Input from './Input';
import Display from './Display';
import './App.css';

function App() {
  const [responseData, setResponseData] = useState(null);

  return (
    <div className="App">
      <h1>21BCE5456</h1>
      <Input setResponseData={setResponseData} />
      <Display responseData={responseData} />
    </div>
  );
}

export default App;
