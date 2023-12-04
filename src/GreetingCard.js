import React from 'react';
import PropTypes from 'prop-types';
import './GreetingCard.css';

const GreetingCard = ({ occasion, recipient }) => {
  return (
    <div className="greeting-card">
      <h2>{occasion}, {recipient}!</h2>
    </div>
  );
};

GreetingCard.propTypes = {
  occasion: PropTypes.string,
  recipient: PropTypes.string,
};

GreetingCard.defaultProps = {
  occasion: 'Generic Occasion',
  recipient: 'Friend',
};

export default GreetingCard;
