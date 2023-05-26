import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {
  deleteFromFavorite,
  fetchNoticeById,
} from '../../redux/notices/noticesOperations';
import propTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './NoticesCategoryItem.module.css';
import LearnMore from 'components/Buttons/LearnMore/LearnMore';

import AddToFavorite from 'components/Buttons/AddToFavorite/AddToFavorite';
import RemovePetButton from 'components/Buttons/RemovePetButton/RemovePetButton';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClock } from 'react-icons/hi';
import { GiFemale } from 'react-icons/gi';
import { GiMale } from 'react-icons/gi';

import { useSelector } from 'react-redux';
import {
  deleteNotice,
  addToFavorite,
} from '../../redux/notices/noticesOperations';
import { getAuth, getUser } from '../../redux/auth/authSelector';
import url from '../../images/default_pet.jpg';

const NoticesCategoryItem = ({
  owner,
  id,
  src = url,
  sex,
  location,
  category,
  birthday,
  title,
  favorite = false,
  name,
  breed,
  price,
  comments,
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const [showModal, setShowModal] = useState(false);

  const [fav, setFav] = useState(favorite);


  const { isLogin } = useSelector(getAuth);
  const { _id } = useSelector(getUser);

  const dispatch = useDispatch();

  let categoryName = '';

  switch (category) {
    case 'for-free':
      categoryName = 'in good hands';
      break;

    case 'lost-found':
      categoryName = 'lost/found';
      break;

    case 'sell':
      // eslint-disable-next-line no-unused-vars
      categoryName = 'sell';
      break;

    default:
      break;
  }
  const handleLearnMore = e => {
    if (e.target.parentNode.getAttribute('id') || e.target.getAttribute('id')) {
      const idNotice =
        e.target.getAttribute('id') || e.target.parentNode.getAttribute('id');
      console.log(idNotice);

      dispatch(fetchNoticeById(idNotice));
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'scroll';
  };

  const onFavBtnClick = () => {
    if (isLogin) {
      if (!favorite) {
        dispatch(addToFavorite(id));
        setFav(true);
      }
      if (favorite) {
        dispatch(deleteFromFavorite(id));
        setFav(false);
      }
    } else {
      Notify.warning('Please, signup or login to add notice to favorites', {
        clickToClose: true,
      });
    }
  };

  const onDeleteNotice = () => {
    dispatch(deleteNotice(id));
  };

  return (
    <li className={css.item}>
      <div className={css.relativeContainer}>
        <img src={src} alt={category} className={css.img} />
        <div className={css.wrapOption}>
          <p className={css.textOption}>{categoryName}</p>
          <AddToFavorite
            onClick={onFavBtnClick}
            favorite={fav}
            style={
              isMobile || isDesktop
                ? { position: 'absolute', top: 0, left: '230px' }
                : { position: 'absolute', top: 0, left: '277px' }
            }
          />
          {_id === owner ? <RemovePetButton onClick={onDeleteNotice} /> : <></>}
        </div>
        <ul className={css.container}>
          <li className={css.wrap_text}>
            <HiOutlineLocationMarker className={css.sex_icon} />
            <p className={css.sex_desc}>{location}</p>
          </li>
          <li className={css.wrap_text}>
            <HiOutlineClock className={css.sex_icon} />
            <p className={css.sex_desc}>
              {birthday
                ? moment(
                    birthday.split('.').reverse().join('.'),
                    'YYYYMMDD'
                  ).fromNow(true)
                : '-'}
            </p>
          </li>
          <li className={css.wrap_text}>
            {sex === 'male' ? (
              <GiMale className={css.sex_icon} />
            ) : (
              <GiFemale className={css.sex_icon} />
            )}
            <p className={css.sex_desc}>{sex}</p>
          </li>
        </ul>
      </div>
      <div className={css.wrap_desc}>
        <h3 className={css.title}>{title}</h3>
        <LearnMore id={id} onClick={handleLearnMore} favorite={fav} />
        {showModal && (
          <ModalNotice closeModal={closeModal} src={src} id={id} fav={fav} />
        )}
      </div>
    </li>
  );
};

export default NoticesCategoryItem;

NoticesCategoryItem.propTypes = {
  /* src: propTypes.string.isRequired, */
  sex: propTypes.string,
  birthday: propTypes.string,
  location: propTypes.string,
  category: propTypes.string,
  title: propTypes.string,
  breed: propTypes.string,
  comments: propTypes.string,
  id: propTypes.string,
  price: propTypes.string,
};
