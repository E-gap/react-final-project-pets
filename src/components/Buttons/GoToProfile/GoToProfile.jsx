import { IoPawOutline } from 'react-icons/io5';

import css from './GoToProfile.module.css';
import PropTypes from 'prop-types';

const GoToProfile = ({onClick}) => {
  return (
    <div>
      <button className={css.button} onClick={() => onClick && onClick()}>
        Go to profile <IoPawOutline className={css.icon}/>
        </button>
    </div>
  );
};

GoToProfile.propTypes = {
  onClick: PropTypes.func
}

export default GoToProfile;
