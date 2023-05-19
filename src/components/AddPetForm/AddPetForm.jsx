import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';


import ButtonBack from '../Buttons/FormButon/ButtonBack';
import ButtonNext from '../Buttons/FormButon/ButtonNext';
import ChooseOption from '../../services/ChooseOptions/ChooseOption';
import MoreInfo from '../../services/MoreInfo/MoreInfo';
import PersonalDetails from '../../services/PersonalDetails/PersonalDetails';

import validationSchema from '../../services/validationSchema';

import { INITIAL_STATE } from '../../services/InitialState';

const AddPetForm = () => {
  const [fileInput, setFileInput] = useState('');
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();


  const handleCancelClick = () => {
    navigate('/user');
  };

  const handleNextClick = () => {
    setStep((prevState) => prevState + 1);
  };

  const handlePrevClick = () => {
    setStep((prevState) => prevState - 1);
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = {
      category: values.category,
      title: values.title,
      name: values.name,
      birthday: values.birthday,
      breed: values.breed,
      sex: values.sex,
      image: fileInput,
      location: values.location,
      price: values.price,
      comments: values.comments,
    };

    Object.entries(formData).forEach(([key, value]) =>
      console.log(key, ':', value)
    );

    resetForm();
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
      <h1>{title}</h1>
      <Formik
        initialValues={INITIAL_STATE}
        validationSchema={validationSchema[step]}
        onSubmit={handleSubmit}
      >
        {({ handleChange, setFieldValue, values, dirty, isValid, errors }) => (
          <Form>
            {step === 0 && (
              <div>
                <ChooseOption setCategory={setCategory} />
                <ButtonNext
                  type="button"
                  text="Next"
                  clickHandler={handleNextClick}
                  filled={true}
                  disabled={!category}
                />
              </div>
            )}
            {step === 1 && (
              <div>
                <PersonalDetails
                  category={category}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  values={values}
                />
                <ButtonNext
                  type="button"
                  text="Next"
                  clickHandler={handleNextClick}
                  filled={true}
                  disabled={!isValid}
                />
                <ButtonBack
                  type="button"
                  disabled={!category}
                  clickHandler={handlePrevClick}
                  text="Back"
                />
              </div>
            )}
            {step === 2 && (
              <div>
                <MoreInfo
                  fileInput={fileInput}
                  setFileInput={setFileInput}
                  category={category}
                />
                <ButtonNext
                  type="submit"
                  text="Done"
                  filled={true}
                  disabled={!isValid}
                />
                <ButtonBack
                  type="button"
                  disabled={!category}
                  clickHandler={handlePrevClick}
                  text="Back"
                />
              </div>
            )}
            {step === 0 && (
              <ButtonBack
                type="button"
                clickHandler={handleCancelClick}
                text="Cancel"
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetForm;







