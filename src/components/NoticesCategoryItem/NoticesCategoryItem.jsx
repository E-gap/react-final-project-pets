import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchNoticeById } from '../../redux/notices/noticesOperations';
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
import { getAuth } from '../../redux/auth/authSelector';
import url from '../../images/default_pet.jpg';

const NoticesCategoryItem = ({
  id,
  src = url,
  sex,
  location,
  category,
  birthday,
  title,
  name,
  breed,
  price,
  comments,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const { current } = useRef(window.innerWidth);

  const { isLogin } = useSelector(getAuth);
  // const User = useSelector(getUser);
  // console.log(User.email);

  // const oneNotice = useSelector(selectOneNotice);
  const dispatch = useDispatch();

  // console.log(oneNotice);

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
      fetchNoticeById(idNotice);
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
      setFavorite(!favorite);
    } else {
      Notify.warning('Please, signup or login to add notice to favorites');
    }
  };

  return (
    <li className={css.item}>
      <div className={css.relativeContainer}>
        <img src={src} alt={category} className={css.img} />
        <div className={css.wrapOption}>
          <p className={css.textOption}>{categoryName}</p>
          <AddToFavorite
            onClick={onFavBtnClick}
            favorite={favorite}
            style={
              current <= 767 || current >= 1280
                ? { position: 'absolute', top: 0, left: '230px' }
                : { position: 'absolute', top: 0, left: '277px' }
            }
          />
          <RemovePetButton />
        </div>
        <ul className={css.container}>
          <li className={css.wrap_text}>
            <HiOutlineLocationMarker  className={css.sex_icon} />
            <p className={css.sex_desc}>{location}</p>
            
          </li>
          <li className={css.wrap_text}>
            <HiOutlineClock  className={css.sex_icon}/>
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
              <GiMale className={css.sex_icon}/>
            ) : (
              <GiFemale  className={css.sex_icon}/>
            )}
            <p className={css.sex_desc}>
              {sex}
            </p>
           
          </li>
        </ul>
      </div>
      <div className={css.wrap_desc}>
        <h3 className={css.title}>{title}</h3>
        <LearnMore id={id} onClick={handleLearnMore} />
        {showModal && (
          <ModalNotice
            closeModal={closeModal}
            // title={title}
            src={src}
            // comments={comments}
            // name={name}
            // birthday={birthday}
            // breed={breed}
            // location={location}
            // sex={sex}
            // category={categoryName}
            // price={price}
            id={id}
          />
        )}
      </div>
    </li>
  );
};

export default NoticesCategoryItem;

NoticesCategoryItem.propTypes = {
  /* src: propTypes.string.isRequired, */
  sex: propTypes.string.isRequired,
  birthday: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  breed: propTypes.string.isRequired,
  comments: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
};
