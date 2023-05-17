import css from './PetLoader.module.css';
import loader from "./480.gif";

const PetLoader = () => {
  return (
    <div class={css.loaderContainer}>
      <div class={css.loader}>
        <img src={loader} alt="qwerty"  />
      </div>
    </div>
  );
};

export default PetLoader;
