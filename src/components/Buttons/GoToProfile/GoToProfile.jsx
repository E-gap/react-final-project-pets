import { IoPawOutline } from 'react-icons/io5';

import css from './GoToProfile.module.css';


const GoToProfile = () => {
  return (
    <div>
      <button className={css.button}>
        Go to profile <IoPawOutline className={css.icon}/>
        </button>
    </div>
  );
};

export default GoToProfile;
