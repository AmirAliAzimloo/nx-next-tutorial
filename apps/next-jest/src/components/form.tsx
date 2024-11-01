'use client';

import { useState } from 'react';

const Form = () => {
  const [textInput, setTextInput] = useState('');
  const [notes, setNotes] = useState<any>([]);

  return (
    <div>
      <h1>Form</h1>
      <p data-testid="desc">This is my description</p>
      <input
        type="text"
        placeholder="Enter a note"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button
        disabled={!textInput.trim()}
        onClick={() => {
          setNotes((prev: any) => [...prev, textInput]);
          setTextInput('');
        }}
      >
        button fomr
      </button>

      <ul data-testid="notesList">
        {notes?.length > 0 && notes?.map((note: any,index:number) => <li key={index}>{textInput}</li>)}
      </ul>
    </div>
  );
};

export default Form;
