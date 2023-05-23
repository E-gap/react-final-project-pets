import css from './PetLoader.module.css';
import loader from './480.gif';

const PetLoader = () => {

  return (
    <div className={css.loaderContainer}>
        <img className={css.logo_icon} src={loader} alt="Logo icon" />
    </div>
  );
};

export default PetLoader;
