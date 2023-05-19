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
import css from './AddPetForm.module.css';

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
    setStep(prevState => prevState + 1);
  };

  const handlePrevClick = () => {
    setStep(prevState => prevState - 1);
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
    <main className={css.main}>
      <div className={css.formikWrapper + ' container'}>
        <Formik
          initialValues={INITIAL_STATE}
          validationSchema={validationSchema[step]}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            setFieldValue,
            values,
            dirty,
            isValid,
            errors,
          }) => (
            <Form className={css.formik}>
              <h1 className={css.title}>{title}</h1>
              {step === 0 && <ChooseOption setCategory={setCategory} />}
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
