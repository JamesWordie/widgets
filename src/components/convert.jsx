import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
  const [translatedText, setTranslatedText] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText,
          target: language.value,
          key: process.env.REACT_APP_API_KEY
        }
      }
    );

    setTranslatedText(data.data.translations[0].translatedText)
  };

  doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h5>{translatedText}</h5>
    </div>
  )
};

export default Convert;
