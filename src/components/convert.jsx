import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: text,
          target: language.value,
          key: process.env.REACT_APP_API_KEY
        }
      }
    );

    setTranslatedText(data.data.translations[0].translatedText)
  };

  doTranslation();
  }, [language, text]);

  return <div />
};

export default Convert;
