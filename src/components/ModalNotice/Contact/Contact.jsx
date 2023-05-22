import React from 'react';
import css from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ phone }) => {
  return (
    <button className={css.button}>
      <a href={`tel:${phone}`} className={css.contactLink}>
        Contact
      </a>
    </button>
  );
};

export default Contact;

Contact.propTypes = {
  phone: PropTypes.string,
};
