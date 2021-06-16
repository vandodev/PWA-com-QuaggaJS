import React, { useState } from 'react';
import Scanner from './Scanner';
import Results from './Results';

function Main() {
  const [isbn, setIsbn] = useState('9788576082675');
  return (
    <>
      {/* <Scanner onScan={setIsbn} /> */}
      <Results isbn={isbn} />
    </>
  );
}

export default Main;
