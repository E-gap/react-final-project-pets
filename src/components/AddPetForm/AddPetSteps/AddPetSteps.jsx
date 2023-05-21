import css from './AddPetSteps.module.css';

const AddPetSteps = ({ currentStep }) => {
  const steps = ['Choose Option', 'Personal Details', 'More Info'];
  const items = steps.map((label, index) => (
    <li
      className={
        index < currentStep ? `${css.item} ${css.completeText}` : css.item
      }
      key={index}
    >
      <p className={css.text}>{label}</p>
      <span
        className={
          currentStep === index
            ? `${css.span} ${css.active}`
            : index < currentStep
            ? `${css.span} ${css.complete}`
            : css.span
        }
      ></span>
    </li>
  ));
  return <ul className={css.list}>{items}</ul>;
};

export default AddPetSteps;
