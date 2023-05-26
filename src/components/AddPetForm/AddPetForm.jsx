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

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
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
    return step === 0 ? null : titles[category];
  }, [category, step]);

  useEffect(() => {
    setTitle(getPageTitle());
  }, [getPageTitle]);

  function validateTitle(value) {
    if (!value) {
      return 'Title is required';
    } else if (value.length < 4) {
      return 'Title must be at least 4 characters';
    }
  }

  function validateName(value) {
    if (!value) {
      return 'Name is required';
    } else if (value.length < 2) {
      return 'Name must be at least 2 characters';
    } else if (value.length > 16) {
      return 'Name must not exceed 16 characters';
    }
  }

  function validateBirthday(value) {
    if (!value) {
      return 'Date is required';
    } else if (!/^(\d{2})\.(\d{2})\.(\d{4})$/i.test(value)) {
      return 'Invalid date format. Use DD.MM.YYYY';
    }
  }

  function validateBreed(value) {
    if (!value) {
      return 'Breed is required';
    } else if (value.length < 2) {
      return 'Breed must be at least 2 characters';
    } else if (value.length > 16) {
      return 'Breed must not exceed 16 characters';
    }
  }

  function validateLocation(value) {
    if (!value) {
      return 'Location is required';
    } else if (!/^[A-Za-z\s]+$/i.test(value)) {
      return 'Invalid location format';
    }
  }

  function validatePrice(value) {
    if (!value) {
      return 'Price is required';
    }
  }

  function validateComments(value) {
    if (!value) {
      return 'Comments is required';
    } else if (value.length < 4) {
      return 'Comments should be at least 4 characters';
    } else if (value.length > 120) {
      return 'Comments should not exceed 120 characters';
    }
  }

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
            touched,
          }) => (
            <Form
              className={css.formik}
              style={{
                width:
                  isTabletOrDesktop && step === 2
                    ? '704px'
                    : isMobile
                    ? '280px'
                    : '458px',
                alignItems:
                  isTabletOrDesktop && step === 2 ? 'center' : 'flex-start',
              }}
            >
              <h1 className={css.title}>{title ? title : 'Add pet'}</h1>
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
                  errors={errors}
                  touched={touched}
                  validateTitle={validateTitle}
                  validateName={validateName}
                  validateBirthday={validateBirthday}
                  validateBreed={validateBreed}
                />
              )}
              {step === 2 && (
                <MoreInfo
                  category={category}
                  value={values}
                  errors={errors}
                  touched={touched}
                  validateLocation={validateLocation}
                  validatePrice={validatePrice}
                  validateComments={validateComments}
                />
              )}
              <div className={css.btnWrapper}>
                <ButtonNext
                  type={step === 2 ? 'submit' : 'button'}
                  text={step === 2 ? 'Done' : 'Next'}
                  clickHandler={step !== 2 ? handleNextClick : undefined}
                  disabled={!isValid ? true : false}
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
