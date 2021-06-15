import React, { useState } from 'react';
import Scanner from './Scanner';

function Main() {
  const [isbn, setIsbn] = useState();
  return <Scanner onScan={setIsbn} />;
}

export default Main;
