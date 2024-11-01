'use client';

import { useState } from 'react';

const Form = () => {
  const [textInput, setTextInput] = useState("");

  return (
    <div>
      <h1>Form</h1>
      <p data-testid="desc">This is my description</p>
      <input type="text" placeholder="Enter a note" value={textInput} onChange={(e)=> setTextInput(e.target.value) } />
      <button disabled={!textInput.trim()}>button fomr</button>
    </div>
  );
};

export default Form;
