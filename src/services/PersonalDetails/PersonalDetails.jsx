import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import classnames from 'classnames';

import css from './PersonalDetails.module.css';

const PersonalDetails = ({
  category,
  values,
  errors,
  touched,
  validateTitle,
  validateName,
  validateBirthday,
  validateBreed
}) => {
  const { handleChange, setFieldValue } = useFormikContext();

  const handleInputChange = e => {
    const { name, value } = e.target;
    handleChange(e);
    setFieldValue(name, value);
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
            validate={validateTitle}
            className={classnames(css.field, {
              [css.errorField]: errors.title && touched.title,
              [css.validField]: !errors.title && touched.title,
            })}
            required
            onChange={handleInputChange}
          />{' '}
          <div className={css.errorMsg}>
            <ErrorMessage name="title" component="div" />
          </div>
          {!errors.title && touched.title && (
            <div className={css.validMsg}>
              <p>Title is valid</p>
            </div>
          )}
        </label>
      )}
      <label className={css.label}>
        <span className={css.labelText}>Name pet</span>
        <Field
          placeholder="Type name pet"
          type="text"
          name="name"
          validate={validateName}
          className={classnames(css.field, {
            [css.errorField]: errors.name && touched.name,
            [css.validField]: !errors.name && touched.name,
          })}
          onChange={handleInputChange}
        />
        <div className={css.errorMsg}>
          <ErrorMessage name="name" component="div" />
        </div>
        {!errors.name && touched.name && (
          <div className={css.validMsg}>
            <p>Name is valid</p>
          </div>
        )}
      </label>
      <label className={css.label}>
        <span className={css.labelText}>Date of birth</span>
        <Field
          placeholder="Type date of birth"
          type="text"
          name="birthday"
          data-pattern="**.**.****"
          validate={validateBirthday}
          className={classnames(css.field, {
            [css.errorField]: errors.birthday && touched.birthday,
            [css.validField]: !errors.birthday && touched.birthday,
          })}
          onChange={handleInputChange}
        />
        <div className={css.errorMsg}>
          <ErrorMessage name="birthday" component="div" />
        </div>
        {!errors.birthday && touched.birthday && (
          <div className={css.validMsg}>
            <p>Date is valid</p>
          </div>
        )}
      </label>
      <label className={css.label}>
        <span className={css.labelText}>Breed</span>
        <Field
          placeholder="Type breed"
          type="text"
          name="breed"
          validate={validateBreed}
          className={classnames(css.field, {
            [css.errorField]: errors.breed && touched.breed,
            [css.validField]: !errors.breed && touched.breed,
          })}
          onChange={handleInputChange}
        />
        <div className={css.errorMsg}>
          <ErrorMessage name="breed" component="div" />
        </div>
        {!errors.breed && touched.breed && (
          <div className={css.validMsg}>
            <p>Breed is valid</p>
          </div>
        )}
      </label>
    </div>
  );
};

PersonalDetails.propTypes = {
  category: PropTypes.string.isRequired,
  values: PropTypes.object,
  errors: PropTypes.any,
  touched: PropTypes.any,
  validateTitle: PropTypes.func,
  validateName: PropTypes.func,
  validateBirthday: PropTypes.func,
  validateBreed: PropTypes.func,
};

export default PersonalDetails;
