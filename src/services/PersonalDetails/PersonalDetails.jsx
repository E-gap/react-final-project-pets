import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, useFormikContext } from 'formik';

const PersonalDetails = ({ category }) => {
  const { handleChange, setFieldValue } = useFormikContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(e);
    setFieldValue(name, value); // Update form values
  };

  return (
    <div className="personal-form-wrapper">
      {category !== 'your-pet' && (
        <label htmlFor="title">
          Title of add:
          <Field
            placeholder="Type title"
            type="text"
            name="title"
            className="add-form-input"
            onChange={handleInputChange}
          />
          <ErrorMessage name="title" component="div" />
        </label>
      )}
      <label>
        Name:
        <Field
          placeholder="Type name pet"
          type="text"
          name="name"
          className="add-form-input"
          onChange={handleInputChange}
        />
        <ErrorMessage name="name" component="div" />
      </label>
      <label htmlFor="birthday">
        Birthday:
        <Field
          placeholder="Type date of birth"
          type="text"
          name="birthday"
          data-pattern="**.**.****"
          className="add-form-input"
          onChange={handleInputChange}
        />
        <ErrorMessage name="birthday" component="div" />
      </label>
      <label htmlFor="breed" className="add-form-label">
        Breed:
        <Field
          placeholder="Type breed"
          type="text"
          name="breed"
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

