import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getBook } from '../../../services/books';
import { Container, Wrapper, Cover, Info, ActionButtons } from './styles';
import StarRatings from 'react-star-ratings';
import { MdArrowForward } from 'react-icons/md';

function Results({ isbn }) {
  const [book, setBook] = useState();

  useEffect(() => {
    const loadBook = async () => {
      const response = await getBook(isbn);
      setBook(response);
    };
    loadBook();
  }, [isbn]);

  return (
    <Container>
      <Link to={`/book-details/${isbn}`}>
        <Wrapper>
          <Cover src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8V65yMtpQUrOnodqyw8rtANY4NIu26ywzF_yH37pCq4-MeJ6oqciPPYvKVH6vHV0WPSIkl1FqZ1dyhbPWKRQgz1lRR9a72c9udBPwOCvXgd0kdm5W5t-6aA&usqp=CAc" />
          <Info>
            <h4 className="name">Código do livro</h4>
            <div className="book-rating">
              <StarRatings
                rating={4}
                starRatedColor="#f1c40f"
                starDimension="18"
                starSpacing="0"
              />{' '}
              (4.0)
            </div>
            <div className="price">
              <span className="discount">R$99,90</span> por{' '}
              <span>R$ 39,90</span>
            </div>
          </Info>
          <ActionButtons>
            <span className="button">
              <MdArrowForward size={32} color="#fff" />
            </span>
          </ActionButtons>
        </Wrapper>
      </Link>
    </Container>
  );
}

Results.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default Results;
