import React from 'react';
import { Field, useFormikContext } from 'formik';
import PropTypes from 'prop-types';

const ChooseOption = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleCategoryChange = event => {
    const category = event.target.value;
    setFieldValue('category', category);
  };

  return (
    <div>
      {/* Радіокнопка для категорії "Ваш питомець" */}
      <label htmlFor="your-pet">
        <Field
          type="radio"
          name="category"
          value="your-pet"
          id="your-pet"
          checked={values.category === 'your-pet'}
          onChange={handleCategoryChange}
        />
        Your pet
      </label>

      {/* Радіокнопка для категорії "Продати" */}
      <label htmlFor="sell">
        <Field
          type="radio"
          name="category"
          value="sell"
          id="sell"
          checked={values.category === 'sell'}
          onChange={handleCategoryChange}
        />
        Sell
      </label>

      {/* Радіокнопка для категорії "Загублено/знайдено" */}
      <label htmlFor="lost-found">
        <Field
          type="radio"
          name="category"
          value="lost-found"
          id="lost-found"
          checked={values.category === 'lost-found'}
          onChange={handleCategoryChange}
        />
        Lost/found
      </label>

      {/* Радіокнопка для категорії "На добрі руки" */}
      <label htmlFor="good-hands">
        <Field
          type="radio"
          name="category"
          value="good-hands"
          id="good-hands"
          checked={values.category === 'good-hands'}
          onChange={handleCategoryChange}
        />
        In good hands
      </label>
    </div>
  );
};

ChooseOption.propTypes = {
  type: PropTypes.string,
};
export default ChooseOption;



