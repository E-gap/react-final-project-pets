import css from './PetsData.module.css';
import MyPetsItem from '../MyPetsItem/MyPetsItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPets } from '../../redux/pets/petsSelectors';
import { fetchPets } from '../../redux/pets/petsOperations';

const PetsData = () => {

  const dispatch = useDispatch();
  const { pets } = useSelector(selectPets);

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <ul className={css.petsList}>
      {
        pets.map((pet) => (
          <li key={pet['_id']} className={css.petsListItem}>
            <MyPetsItem id={pet['_id']}
                        name={pet.name}
                        birthday={pet.birthDate}
                        breed={pet.breed}
                        comments={pet.comments}
                        photo={pet.photo}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default PetsData;
