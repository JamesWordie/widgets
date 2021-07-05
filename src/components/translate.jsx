import React, { useState } from 'react';
import Dropdown from './dropdown';
import Convert from './convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Arabic',
    value: 'ar'
  }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="row justify-content-center my-5">
        <div className="col-md-12">
          <label htmlFor="translate-text" className="form-label">Text to Translate</label>
          <input
            value={text} type="text"
            id='translate-text' className='form-control'
            placeholder="Enter some text"
            onChange={((event) => setText(event.target.value))}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <br />
      <h3>Converted Text</h3>
      <Convert
        language={language}
        text={text}
        />
    </div>
  );
};

export default Translate;
