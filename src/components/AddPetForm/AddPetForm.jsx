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
  const [fileInput, setFileInput] = useState(null);
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

      const newFormData = new FormData();

      newFormData.set('category', category);
      newFormData.set('name', values.name);
      newFormData.set('birthday', values.birthday);
      newFormData.set('breed', values.breed);
      newFormData.set('photo', fileInput);
      newFormData.set('comments', values.comments);

      if (category === 'your-pet') {
        dispatch(createPet({ category: 'your-pet', newFormData }));
        navigate(-1);
        console.log('your-pet');
        return;
      }

      newFormData.set('title', values.title);
      newFormData.set('sex', values.sex);
      newFormData.set('location', values.location);

      if (category === 'lost-found') {
        dispatch(addNotice({ category: 'lost-found', newFormData }));
        navigate(-1);
        console.log('lost-found');
        return;
      }

      if (category === 'good-hands') {
        dispatch(addNotice({ category: 'for-free', newFormData }));
        navigate(-1);
        return;
      }

      newFormData.set('price', values.price);

      if (category === 'sell') {
        dispatch(addNotice({ category: 'sell', newFormData }));
        navigate(-1);
        console.log('sell');
        return;
      }

      resetForm();
      navigate(-1);
    },
    [category, fileInput, navigate, dispatch]
  );

  const getPageTitle = useCallback(() => {
    const titles = {
      'your-pet': 'Add pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add lost pet',
      'good-hands': 'Add to give a pet for adoption',
      '': 'Add Pet',
    };
    return titles[category] || 'Add Pet';
  }, [category]);

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
                  fileInput={fileInput}
                  setFileInput={setFileInput}
                  category={category}
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
