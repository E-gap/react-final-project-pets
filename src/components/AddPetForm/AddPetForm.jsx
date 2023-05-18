import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';

import ButtonBack from '../Buttons/FormButon/ButtonBack';
import ButtonNext from '../Buttons/FormButon/ButtonNext';
import ChooseOption from '../../services/ChooseOptions/ChooseOption';
import MoreInfo from '../../services/MoreInfo/MoreInfo';
import PersonalDetails from '../../services/PersonalDetails/PersonalDetails';

import { INITIAL_STATE } from '../../services/InitialState';
// import validationSchema from '../../services/validationSchema';


const AddPetForm = () => {
  const [fileInput, setFileInput] = useState('');
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const steps = ['Choose Option', 'Personal Details', 'More Info'];

  const handleCancelClick = () => {
    navigate('/user'); // Перехід до шляху '/user'
  };

  const handleNextClick = e => {
    setStep(prevState => prevState + 1); // Збільшити крок на 1
  };

  const handlePrevClick = () => {
    setStep(prevState => prevState - 1); // Зменшити крок на 1
  };

  const handleSubmit = async values => {
    // Створення об'єкту formData, який містить поля форми та їх значення

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
      comments: values.comments
    };

    // чек що приходить з форми
    Object.entries(formData).forEach(([key, value]) => console.log(key, ':', value));
  };

  const getPageTitle = useCallback(() => {
    // Отримання заголовку сторінки залежно від категорії
    const titles = {
      'your-pet': 'Add my pet',
      sell: 'Add pet for sell',
      'lost-found': 'Add to lost or found pet',
      'good-hands': 'Add to give a Pet for Adoption',
      '': 'Add Pet'
    };
    return titles[category] || 'Add Pet';
  }, [category]);

  useEffect(() => {
    setTitle(getPageTitle()); // Оновлення заголовку при зміні категорії
  }, [getPageTitle]);

  return (
    <div>
      <h1>{title}</h1> {/* Відображення заголовку форми */}
      <ul>
        {/* Відображення списку кроків форми */}
        {steps.map((index) => (
          <li key={index}>
            <span>
              {step === 0 && index === 0 && 'Choose Option'}
              {step === 1 && index === 1 && 'Personal Details'}
              {step === 2 && index === 2 && 'More Info'}
            </span>
          </li>
        ))}
      </ul>
      <Formik initialValues={INITIAL_STATE} onSubmit={handleSubmit}>
        {() => (
          <Form>
            {/* Відображення поточного кроку форми залежно від значення змінної `step` */}
            {step === 0 && (
              <div>
                <ChooseOption setCategory={setCategory} /> {/* Крок 1: Вибір опції */}
                <ButtonNext type="button" text="Next" clickHandler={handleNextClick} filled={true} />
              </div>
            )}
            {step === 1 && (
              <div>
                <PersonalDetails category={category} /> {/* Крок 2: Особисті дані */}
                <ButtonNext type="button" text="Next" clickHandler={handleNextClick} filled={true} />
                <ButtonBack type="button" disabled={!category} clickHandler={handlePrevClick} text="Back" />
              </div>
            )}
            {step === 2 && (
              <div>
                <MoreInfo fileInput={fileInput} setFileInput={setFileInput} category={category} />{' '}
                {/* Крок 3: Додаткова інформація */}
                <ButtonNext type="submit" text="Done" filled={true} clickHandler={handleSubmit} />
                <ButtonBack type="button" disabled={!category} clickHandler={handlePrevClick} text="Back" />
              </div>
            )}
            {step === 0 && (
              <ButtonBack type="button" clickHandler={handleCancelClick} text="Cancel" />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPetForm;