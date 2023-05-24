import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { useMediaQuery } from 'react-responsive';

import { addNotice } from '../../redux/notices/noticesOperations.js';
import { createPet } from 'redux/pets/petsOperations.js';

import ButtonBack from '../Buttons/FormButon/ButtonBack';
import ButtonNext from '../Buttons/FormButon/ButtonNext';
import ChooseOption from '../../services/ChooseOptions/ChooseOption';
import MoreInfo from '../../services/MoreInfo/MoreInfo';
import PersonalDetails from '../../services/PersonalDetails/PersonalDetails';
import AddPetSteps from './AddPetSteps/AddPetSteps.jsx';

import validationSchema from '../../services/validationSchema';

import { INITIAL_STATE } from '../../services/InitialState';
import css from './AddPetForm.module.css';

const AddPetForm = () => {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  // const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const handleCancelClick = () => {
    navigate(-1);
  };

  const handleNextClick = event => {
    event.preventDefault();
    setStep(prevState => prevState + 1);
  };

  const handlePrevClick = () => {
    setStep(prevState => prevState - 1);
  };

  const handleSubmit = useCallback(
    async (values, resetForm) => {
      if (!category) return;
  
      const formData = new FormData();
  
      formData.append('name', values.name);
      formData.append('birthday', values.birthday);
      formData.append('breed', values.breed);
      formData.append('comments', values.comments);
      formData.append('photo', values.photo); 
  
      if (category === 'your-pet') {
        dispatch(createPet(formData));
        navigate(-1);
        return;
      }
  
      formData.append('category', category);
      formData.append('title', values.title);
      formData.append('sex', values.sex);
      formData.append('location', values.location);
  
      if (category === 'lost-found') {
        dispatch(addNotice(formData));
        navigate(-1);
        return;
      }
  
      if (category === 'good-hands') {
        dispatch(addNotice(formData));
        navigate(-1);
        return;
      }
  
      formData.append('price', values.price);
  
      if (category === 'sell') {
        dispatch(addNotice(formData));
        navigate(-1);
        return;
      }
  
      navigate(-1);
      resetForm();
    },
    [category, navigate, dispatch]
  );
  

  const getPageTitle = useCallback(() => {
    const titles = {
      'your-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add lost pet',
      'good-hands': 'Add to pet for adoption',
    };
    return step === 0?'Add Pet' : titles[category];
  },[category,step]);

  useEffect(() => {
    setTitle(getPageTitle());
  }, [getPageTitle]);

  return (
    <main className={css.main}>
      <div className={css.formikWrapper + ' container'}>
        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={validationSchema[step]}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
          {({
            handleChange,
            setFieldValue,
            values,
            dirty,
            isValid,
            errors,
          }) => (
            <Form
              className={css.formik}
              style={{
                width: isTabletOrDesktop && step === 2 ? '704px' : '458px',
                alignItems:
                  isTabletOrDesktop && step === 2 ? 'center' : 'flex-start',
              }}
            >
              <h1 className={css.title}>{title}</h1>
              <AddPetSteps currentStep={step} />
              {step === 0 && (
                <ChooseOption
                  setCategory={setCategory}
                  selectedCategory={category}
                />
              )}
              {step === 1 && (
                <PersonalDetails
                  category={category}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  values={values}
                />
              )}
              {step === 2 && (
                <MoreInfo
                  category={category}
                  value={values}
                />
              )}
              <div className={css.btnWrapper}>
                <ButtonNext
                  type={step === 2 ? 'submit' : 'button'}
                  text={step === 2 ? 'Done' : 'Next'}
                  clickHandler={step !== 2 ? handleNextClick : undefined}
                  disabled={step === 0 ? !category : !isValid}
                />
                <ButtonBack
                  type="button"
                  clickHandler={
                    step === 0 ? handleCancelClick : handlePrevClick
                  }
                  text={step === 0 ? 'Cancel' : 'Back'}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default AddPetForm;
