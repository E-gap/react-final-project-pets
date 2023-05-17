import css from './NoticesCategoryItem.module.css';
import LearnMore from 'components/Buttons/LearnMore/LearnMore';
import getPetAge from './getPetAge';
import AddToFavorite from 'components/Buttons/AddToFavorite/AddToFavorite';
// import RemovePetButton from 'components/Buttons/RemovePetButton/RemovePetButton';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClock } from 'react-icons/hi';
import { GiFemale } from 'react-icons/gi';
import { GiMale } from 'react-icons/gi';
import url from '../../images/default_pet.jpg';

const NoticesCategoryItem = ({
  src = url,
  sex,
  favorite,
  location,
  category,
  birthday,
  title,
}) => {
  const petAge = getPetAge(new Date(birthday.split('.').reverse().join('.')));
  return (
    <li className={css.item}>
      <div className={css.relativeContainer}>
        <img src={src} alt={category} className={css.img} />
        <div className={css.wrapOption}>
          <p className={css.textOption}>{category}</p>
          <AddToFavorite className={css.btnFav} />
        </div>
        <div className={css.container}>
          <div className={css.wrap}>
            <HiOutlineLocationMarker
              style={{ fontSize: 19, color: '#54ADFF' }}
            />
            <p className={css.text}>{location}</p>
          </div>
          <div className={css.wrap}>
            <HiOutlineClock style={{ fontSize: 19, color: '#54ADFF' }} />
            <p className={css.text}>{petAge}</p>
          </div>
          <div className={css.wrap}>
            {sex === 'male' ? (
              <GiMale style={{ fontSize: 19, color: '#54ADFF' }} />
            ) : (
              <GiFemale style={{ fontSize: 19, color: '#54ADFF' }} />
            )}
            <p className={css.text}>{sex}</p>
          </div>
        </div>
      </div>
      <div className={css.wrapText}>
        <h3 className={css.title}>{title}</h3>

        <LearnMore />

        {/* <RemovePetButton /> */}
      </div>
    </li>
  );
};

export default NoticesCategoryItem;
