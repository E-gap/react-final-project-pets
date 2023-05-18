import css from './PetLoader.module.css';
import loader from './480.gif';

const PetLoader = () => {

  return (
    <div className={css.loaderContainer}>
      <div className={css.loader}>
        <img src={loader} alt="qwerty" />
      </div>
    </div>
  );
};

export default PetLoader;
