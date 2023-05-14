import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import ButtonBack from './FormButon/ButtonBack';
import ButtonNext from './FormButon/ButtonNext';
import ChooseOption from './ChooseOptions/ChooseOption';
import MoreInfo from './MoreInfo/MoreInfo';
import PersonalDetails from './PersonalDetails/PersonalDetails';

const INITIAL_STATE = {
  category: '',
  name: '',
  title: '',
  birthday: '',
  breed: '',
  location: '',
  comments: '',
  image: null,
  sex: '',
  price: '',
};


const AddPetForm = () => {
  const [fileInput, setFileInput] = useState('');
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  

  const handleCancelClick = () => {
    navigate('/user');
  };

  const handleNextClick = e => {
    setStep(prevState => prevState + 1);
  };

  const handlePrevClick = () => {
    setStep(prevState => prevState - 1);
  };

  const handleSubmit = async values => {
    const formData = new FormData();
    formData.append('category', values.category);
    formData.append('title', values.title);
    formData.append('name', values.name);
    formData.append('birthday', values.birthday);
    formData.append('breed', values.breed);
    formData.append('sex', values.sex);
    formData.append('image', fileInput);
    formData.append('location', values.location);
    formData.append('price', values.price);
    formData.append('comments', values.comments);

    formData.forEach((value, key) => console.log(key, ':', value));
  };

  const getPageTitle = useCallback(() => {
    const titles = {
      'your-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add to lost or found pet',
      'good-hands': 'Add to give a Pet for Adoption',
      '': 'Add Pet',
    };
    return titles[category] || 'Add Pet';
  }, [category]);

  useEffect(() => {
    setTitle(getPageTitle());
  }, [getPageTitle]);
  return (
    <div>
      <h1 >{title}</h1>
      <ul >
        {steps.map((stepName, index) => (
          <li key={index}  >
            <span>{stepName}</span>
          </li>
        ))}
      </ul>
      <Formik initialValues={INITIAL_STATE} onSubmit={handleSubmit}>
        {() => (
          <form autoComplete="on" >
            {step === 0 && <ChooseOption setCategory={setCategory} />}
            {step === 1 && <PersonalDetails category={category} />}
            {step === 2 && (
              <MoreInfo
                fileInput={fileInput}
                setFileInput={setFileInput}
                category={category}
              />
            )}

            <div >
              {step < 2 && (
                <ButtonNext
                  type="button"
                  text="Next"
                  clickHandler={handleNextClick}
                  filled={true}
                />
              )}

              {step === 2 && (
                <ButtonNext
                  type="submit"
                  text="Done"
                  filled={true}
                  clickHandler={handleSubmit}
                />
              )}

              {step > 0 && (
                <ButtonBack
                  type="button"
                  disabled={!category}
                  clickHandler={handlePrevClick}
                  text="Back"
                />
              )}

              {step === 0 && (
                <ButtonBack
                  type="button"
                  clickHandler={handleCancelClick}
                  text="Cancel"
                />
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetForm;










