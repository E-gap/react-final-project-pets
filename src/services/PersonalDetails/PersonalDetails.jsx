import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field} from 'formik';

const PersonalDetails = ({ category }) => {
  // console.log(category,"kat")
  return (
    <div className="personal-form-wrapper">
      {/* Перевірка, чи категорія не є "your-pet" */}
      {category !== 'your-pet' && (
        <label htmlFor="title">
          Title of add:
          <Field placeholder="Type title" type="text" name="title" className="add-form-input" />
          {/* Відображення помилки, якщо поле "title" має помилку */}
          <ErrorMessage name="title" component="div" />
        </label>
      )}
      <label>
        Name:
        <Field placeholder="Type name pet" type="text" name="name" className="add-form-input" />
        {/* Відображення помилки, якщо поле "name" має помилку */}
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
        />
        {/* Відображення помилки, якщо поле "birthday" має помилку */}
        <ErrorMessage name="birthday" component="div" />
      </label>
      <label htmlFor="breed" className="add-form-label">
        Breed:
        <Field placeholder="Type breed" type="text" name="breed" />
        {/* Відображення помилки, якщо поле "breed" має помилку */}
        <ErrorMessage name="breed" component="div" />
      </label>
    </div>
  );
};

PersonalDetails.propTypes = {
  category: PropTypes.string.isRequired,
};

export default PersonalDetails;

