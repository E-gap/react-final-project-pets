import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ChooseForm(props) {
  const [category, setCategory] = useState('');
  
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    props.setCategory(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        name="category"
        value="your-pet"
        id="your-pet"
        checked={category === 'your-pet'}
        onChange={handleCategoryChange}
      />
      <label htmlFor="your-pet">Your pet</label>

      <input
        type="radio"
        name="category"
        value="sell"
        id="sell"
        checked={category === 'sell'}
        onChange={handleCategoryChange}
      />
      <label htmlFor="sell">Sell</label>

      <input
        type="radio"
        name="category"
        value="lost-found"
        id="lost-found"
        checked={category === 'lost-found'}
        onChange={handleCategoryChange}
      />
      <label htmlFor="lost-found">Lost/found</label>

      <input
        type="radio"
        name="category"
        value="good-hands"
        id="good-hands"
        checked={category === 'good-hands'}
        onChange={handleCategoryChange}
      />
      <label htmlFor="good-hands">In good hands</label>
    </div>
  );
};

ChooseForm.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default ChooseForm;

