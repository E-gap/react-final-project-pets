import css from './MyPetsItem.module.css';
import trash from '../../images/UserPage/trash.svg';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePet } from '../../redux/pets/petsOperations';

const MyPetsItem = ({ id, name, birthday, breed, comments, photo }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePet(id));
  };

  return (
    <div className={css.container}>
      <img src={photo} alt='Pet' className={css.petsPhoto} />
      <ul className={css.petInformationList}>
        <li className={css.petInformationFirstListItem}>
          <p className={css.informationText}>
            <span className={css.informationTextLabel}>Name:</span>&nbsp;
            {name}
          </p>
          <img className={css.deleteButton}
               src={trash}
               alt='Delete pet'
               width={24}
               height={24}
               onClick={handleDelete}
          />
        </li>
        <li>
          <p className={css.informationText}>
            <span className={css.informationTextLabel}>Date of birth:</span>&nbsp;
            {birthday}
          </p>
        </li>
        <li>
          <p className={css.informationText}>
            <span className={css.informationTextLabel}>Breed:</span>&nbsp;
            {breed}
          </p>
        </li>
        <li>
          <p className={css.informationText}>
            <span className={css.informationTextLabel}>Comments:</span>&nbsp;
            {comments}
          </p>
        </li>
      </ul>
    </div>
  );
};

MyPetsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default MyPetsItem;
