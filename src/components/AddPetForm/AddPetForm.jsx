import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import ButtonBack from '../Buttons/FormButon/ButtonBack';
import ButtonNext from '../Buttons/FormButon/ButtonNext';
import ChooseOption from '../../Service/ChooseOptions/ChooseOption';
import MoreInfo from '../../Service/MoreInfo/MoreInfo';
import PersonalDetails from '../../Service/PersonalDetails/PersonalDetails';
import { INITIAL_STATE } from '../../Service/InitialState';

const AddPetForm = () => {
  const [fileInput, setFileInput] = useState(''); // Стан для вибраного файлу
  const [step, setStep] = useState(0); // Стан для кроку форми
  const [title, setTitle] = useState(''); // Стан для заголовку
  const [category, setCategory] = useState(''); // Стан для категорії
  const navigate = useNavigate(); // Функція для навігації

  const steps = ['Choose Option', 'Personal Details', 'More Info']; // Масив кроків форми

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
    // Обробник  форми
    const formData = new FormData(); // Створення нового об'єкту FormData
    // Додавання полів до об'єкту FormData
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

    formData.forEach((value, key) => console.log(key, ':', value)); // Виведення значень полів FormData в консоль
  };

  const getPageTitle = useCallback(() => {
    // Отримання заголовку сторінки залежно від категорії
    const titles = {
      'your-pet': 'Add my pet',
      'sell': 'Add pet for sell',
      'lost-found': 'Add to lost or found pet',
      'good-hands': 'Add to give a Pet for Adoption',
      '': 'Add Pet',
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
        {steps.map((stepName, index) => (
          <li key={index}>
            <span>{stepName}</span>
          </li>
        ))}
      </ul>
      <Formik initialValues={INITIAL_STATE} onSubmit={handleSubmit}>
        {() => (
          <div>
            {/* Відображення поточного кроку форми залежно від значення змінної `step` */}
            {step === 0 && <ChooseOption setCategory={setCategory} />} {/* Крок 1: Вибір опції */}
            {step === 1 && <PersonalDetails category={category} />} {/* Крок 2: Особисті дані */}
            {step === 2 && (
              <MoreInfo
                fileInput={fileInput}
                setFileInput={setFileInput}
                category={category}
              />
            )} {/* Крок 3: Додаткова інформація */}
  
            <div>
              {/* Відображення кнопки "Next" для переходу до наступного кроку (якщо не останній крок) */}
              {step < 2 && (
                <ButtonNext
                  type="button"
                  text="Next"
                  clickHandler={handleNextClick}
                  filled={true}
                />
              )}
  
              {/* Відображення кнопки "Done" для відправки форми (якщо останній крок) */}
              {step === 2 && (
                <ButtonNext
                  type="submit"
                  text="Done"
                  filled={true}
                  clickHandler={handleSubmit}
                />
              )}
  
              {/* Відображення кнопки "Back" для переходу до попереднього кроку (якщо не перший крок) */}
              {step > 0 && (
                <ButtonBack
                  type="button"
                  disabled={!category}
                  clickHandler={handlePrevClick}
                  text="Back"
                />
              )}
  
              {/* Відображення кнопки "Cancel" для скасування створення  (якщо перший крок) */}
              {step === 0 && (
                <ButtonBack
                  type="button"
                  clickHandler={handleCancelClick}
                  text="Cancel"
                />
              )}
            </div>
          </div>
        )}
      </Formik>
    </div>
  )};

  export default AddPetForm;

