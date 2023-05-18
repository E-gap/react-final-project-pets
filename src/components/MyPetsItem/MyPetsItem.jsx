import css from './MyPetsItem.module.css';
import trash from '../../images/UserPage/trash.svg';

const MyPetsItem = () => {

  const fakeImageSrc2 =
    'https://klike.net/uploads/posts/2019-06/1560149834_2.jpg';

  return (
    <div className={css.container}>
      <img src={fakeImageSrc2} alt='Pet' className={css.petsPhoto} />
      <ul className={css.petInformationList}>
        <li className={css.petInformationFirstListItem}>
          <p className={css.informationText}>
            <span className={css.informationTextLabel}>Name:</span>&nbsp;
            Jack
          </p>
          <img className={css.deleteButton} src={trash} alt='Delete pet' width={24} height={24} />
        </li>
        <li>
          <p className={css.informationText}>
            <span className={css.informationTextLabel}>Date of birth:</span>&nbsp;
            22.04.2018
          </p>
        </li>
        <li>
          <p className={css.informationText}>
            <span className={css.informationTextLabel}>Breed:</span>&nbsp;
            Persian cat
          </p>
        </li>
        <li>
          <p className={css.informationText}>
            <span className={css.informationTextLabel}>Comments:</span>&nbsp;
            Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing
            with toys. Although a bit shy, he's a loyal and affectionate lap cat.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MyPetsItem;
