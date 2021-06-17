import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import { getBook } from '../../services/books';

import Info from './info';
import GeneralScore from './GeneralScore';

function BookDetails() {
  const { isbn } = useParams();
  const [book, setBook] = useState({ isbn: null });

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBook(isbn);
      setBook(response);
    };
    loadBook();
  }, [isbn]);

  return (
    <>
      {book.isbn && (
        <Container>
          <Info book={book} />
          <GeneralScore book={book} />
        </Container>
      )}
    </>
  );
}

export default BookDetails;
