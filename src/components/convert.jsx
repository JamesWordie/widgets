import React, { useState, useEffect } from 'react';

const Convert = ({ text, language }) => {
  useEffect(() => {
    console.log('new language or text')
  }, [language, text]);

  return <div />
};

export default Convert;
