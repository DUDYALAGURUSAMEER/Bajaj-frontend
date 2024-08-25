import React, { useState } from 'react';

const Display = ({ responseData }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectionChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedOptions(options);
  };

  const renderResponse = () => {
    if (!responseData) return null;

    return (
      <div>
        {selectedOptions.includes('Alphabets') && (
          <div>
            <h3>Alphabets:</h3>
            <p>{JSON.stringify(responseData.alphabets)}</p>
          </div>
        )}
        {selectedOptions.includes('Numbers') && (
          <div>
            <h3>Numbers:</h3>
            <p>{JSON.stringify(responseData.numbers)}</p>
          </div>
        )}
        {selectedOptions.includes('Highest lowercase alphabet') && (
          <div>
            <h3>Highest Lowercase Alphabet:</h3>
            <p>{JSON.stringify(responseData.highest_alphabet)}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {responseData && (
        <>
          <h2>Select Data to Display:</h2>
          <select multiple={true} onChange={handleSelectionChange}>
            <option value="Alphabets">Alphabets</option>
            <option value="Numbers">Numbers</option>
            <option value="Highest lowercase alphabet">Highest Lowercase Alphabet</option>
          </select>
          {renderResponse()}
        </>
      )}
    </div>
  );
};

export default Display;
