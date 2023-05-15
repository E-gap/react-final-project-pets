import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form } from 'formik';

const PersonalDetails= ({ category }) => {
  return (
    <div className="personal-form-wrapper">
      <Form>
        {category !== 'your-pet' && (
          <label htmlFor="title" className="add-form-label">
            Title of add:
            <Field placeholder="Type title" type="text" name="title" className="add-form-input" />
            <ErrorMessage name="title" component="div" />
          </label>
        )}
        <label htmlFor="name" className="add-form-label">
          Name:
          <Field placeholder="Type name pet" type="text" name="name" className="add-form-input" />
          <ErrorMessage name="name" component="div" />
        </label>
        <label htmlFor="birthday" className="add-form-label">
          Birthday:
          <Field
            placeholder="Type date of birth"
            type="text"
            name="birthday"
            data-pattern="**.**.****"
            className="add-form-input"
          />
          <ErrorMessage name="birthday" component="div" />
        </label>
        <label htmlFor="breed" className="add-form-label">
          Breed:
          <Field placeholder="Type breed" type="text" name="breed" className="add-form-input" />
          <ErrorMessage name="breed" component="div" />
        </label>
      </Form>
    </div>
  );
};

PersonalDetails.propTypes = {
  category: PropTypes.string.isRequired,
};

export default PersonalDetails;
