import css from './NoticesCategoryItem.module.css';
import LearnMore from 'components/Buttons/LearnMore/LearnMore';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClock } from 'react-icons/hi';
import { GiFemale } from 'react-icons/gi';
import { GiMale } from 'react-icons/gi';
// import AddToFavorite from 'components/Buttons/AddToFavorite/AddToFavorite';
const NoticesCategoryItem = ({
  src,
  sex,
  favorite,
  region,
  option,
  years,
  title,
}) => {
  return (
    <li className={css.item}>
      <div className={css.relativeContainer}>
        <img src={src} alt={option} className={css.img} />
        <div className={css.wrapOption}>
          <p className={css.textOption}>{option}</p>
        </div>
        <div className={css.container}>
          <div className={css.wrap}>
            <HiOutlineLocationMarker
              style={{ fontSize: 19, color: '#54ADFF' }}
            />
            <p className={css.text}>{region}</p>
          </div>
          <div className={css.wrap}>
            <HiOutlineClock style={{ fontSize: 19, color: '#54ADFF' }} />
            <p className={css.text}>{years} year(s)</p>
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
      </div>
    </li>
  );
};

export default NoticesCategoryItem;
