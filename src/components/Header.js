import React from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';

export default function Header({ title }) {
  return (
    <header>
      <button type="button">
        <img data-testid="profile-top-btn" src={ profileIcon } alt="Profile" />
      </button>
      <h3 data-testid="page-title">{title}</h3>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
