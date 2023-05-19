import React from 'react';
import { Field,useFormikContext} from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ChooseOption = ({ setCategory }) => {
  const [category, setLocalCategory] = useState('');

  const handleCategoryChange = event => {
    setCategory(event.target.value);
    setLocalCategory(event.target.value);
  };

  return (
    <div >
      <label htmlFor="your-pet">
        <Field
          type="radio"
          name="category"
          value="your-pet"
          id="your-pet"
          checked={category === 'your-pet'}
          onChange={handleCategoryChange}
        />
        Your pet
      </label>

      <label htmlFor="sell">
        <Field
          type="radio"
          name="category"
          value="sell"
          id="sell"
          checked={category === 'sell'}
          onChange={handleCategoryChange}
        />
        Sell
      </label>

      <label htmlFor="lost-found">
        <Field
          type="radio"
          name="category"
          value="lost-found"
          id="lost-found"
          checked={category === 'lost-found'}
          onChange={handleCategoryChange}
        />
        Lost/found
      </label>

      <label htmlFor="good-hands">
        <Field
          type="radio"
          name="category"
          value="good-hands"
          id="good-hands"
          checked={category === 'good-hands'}
          onChange={handleCategoryChange}
        />
        In good hands
      </label>
    </div>
  );
};

ChooseOption.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default ChooseOption;



