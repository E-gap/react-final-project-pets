import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import css from './ChooseOption.module.css';

const ChooseOption = ({ selectedCategory, setCategory }) => {
  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  

  return (
    <div className={css.form}>
      <label className={css.label}>
        <Field
          className={css.field}
          type="radio"
          name="category"
          value="your-pet"
          checked={selectedCategory === 'your-pet'}
          onChange={handleCategoryChange}
        />
        <span className={css.fieldText}>your pet</span>
      </label>
      <label className={css.label}>
        <Field
          className={css.field}
          type="radio"
          name="category"
          value="sell"
          checked={selectedCategory === 'sell'}
          onChange={handleCategoryChange}
        />
        <span className={css.fieldText}>sell</span>
      </label>

      <label className={css.label}>
        <Field
          className={css.field}
          type="radio"
          name="category"
          value="lost-found"
          checked={selectedCategory === 'lost-found'}
          onChange={handleCategoryChange}
        />
        <span className={css.fieldText}>lost/found</span>
      </label>
      <label className={css.label}>
        <Field
          className={css.field}
          type="radio"
          name="category"
          value="good-hands"
          checked={selectedCategory === 'good-hands'}
          onChange={handleCategoryChange}
        />
        <span className={css.fieldText}>in good hands</span>
      </label>
    </div>
  );
};

ChooseOption.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default ChooseOption;
