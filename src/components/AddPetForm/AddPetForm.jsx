import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import ChooseOption from './ChooseOption';
import PersonalDetails from './PersonalDetails';
import MoreInfoStep from './MoreInfoStep';

function AddPetForm() {
  const [activeStep, setActiveStep] = useState(0);
  const swiperRef = useRef(null);

  const handleNextClick = () => {
    if (activeStep < 2) {
      swiperRef.current.swiper.slideNext();
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeStep > 0) {
      swiperRef.current.swiper.slidePrev();
      setActiveStep(activeStep - 1);
    }
  };
  
  return (
    <div>
      <Swiper ref={swiperRef}>
        <SwiperSlide>
          <ChooseOption />
        </SwiperSlide>
        <SwiperSlide>
          <PersonalDetails />
        </SwiperSlide>
        <SwiperSlide>
          <MoreInfoStep />
        </SwiperSlide>
      </Swiper>
      <button onClick={handlePrevClick}>Назад</button>
      <button onClick={handleNextClick}>Далі</button>
    </div>
  );
}

export default AddPetForm;


