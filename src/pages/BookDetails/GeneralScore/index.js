import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const GeneralScore = ({ book }) => {
  return (
    <Container scoreColor={'green'}>
      <div className="score">
        <span className="summary-score-value">4.2</span>
        <span>Bom</span>
      </div>

      <p className="score-comment">Recomendado pelo editores</p>
    </Container>
  );
};

GeneralScore.propTypes = {
  book: PropTypes.shape({
    score: PropTypes.number,
  }).isRequired,
};

export default GeneralScore;
