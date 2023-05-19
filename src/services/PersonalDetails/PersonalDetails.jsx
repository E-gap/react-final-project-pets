import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, useFormikContext } from 'formik';

import css from './PersonalDetails.module.css';

const PersonalDetails = ({ category }) => {
  const { handleChange, setFieldValue } = useFormikContext();

  const handleInputChange = e => {
    const { name, value } = e.target;
    handleChange(e);
    setFieldValue(name, value); // Update form values
  };

  return (
    <div className={css.form}>
      {category !== 'your-pet' && (
        <label className={css.label}>
          <span className={css.labelText}>Title of add</span>
          <Field
            placeholder="Type title"
            type="text"
            name="title"
            className={css.field}
            onChange={handleInputChange}
          />
          <ErrorMessage name="title" component="div" />
        </label>
      )}
      <label className={css.label}>
        <span className={css.labelText}>Name pet</span>
        <Field
          placeholder="Type name pet"
          type="text"
          name="name"
          className={css.field}
          onChange={handleInputChange}
        />
        <ErrorMessage name="name" component="div" />
      </label>
      <label className={css.label}>
        <span className={css.labelText}>Date of birth</span>
        <Field
          placeholder="Type date of birth"
          type="text"
          name="birthday"
          data-pattern="**.**.****"
          className={css.field}
          onChange={handleInputChange}
        />
        <ErrorMessage name="birthday" component="div" />
      </label>
      <label className={css.label}>
        <span className={css.labelText}>Breed</span>
        <Field
          placeholder="Type breed"
          type="text"
          name="breed"
          className={css.field}
          onChange={handleInputChange}
        />
        <ErrorMessage name="breed" component="div" />
      </label>
    </div>
  );
};

PersonalDetails.propTypes = {
  category: PropTypes.string.isRequired,
};

export default PersonalDetails;
