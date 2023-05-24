import React from 'react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from '../../redux/auth/authSelector';
import AddToFavorite from './temporary/tempAddToFavorite';
import Contact from './Contact/Contact';
import { fetchNoticeById } from '../../redux/notices/noticesOperations';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../redux/notices/noticesOperations';

import propTypes from 'prop-types';

import css from './ModalNotice.module.css';

const modalRoot = document.querySelector('#notice-modal-root');

const ModalNotice = ({ id, closeModal, src }) => {
  const dispatch = useDispatch();
  const [notice, setNotice] = useState({});

  const {
    name,
    title,
    birthday,
    breed,
    category,
    comments,
    email,
    phone,
    location,
    sex,
  } = notice;

  const [favorite, setFavorite] = useState(false);

  const { isLogin } = useSelector(getAuth);

  // console.log('id from modal', id);
  // console.log(notice);
  useEffect(() => {
    const fn = async () => {
      const { payload } = await dispatch(fetchNoticeById(id));
      return setNotice(payload);
    };
    fn();
  });
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // const onFavBtnClick = () => {
  //   if (isLogin) {
  //     setFavorite(true);
  //   } else {
  //     Notify.warning('Please, signup or login to add notice to favorites');
  //   }
  // };

  const onFavBtnClick = () => {
    if (isLogin) {
      // console.log(favorite);
      setFavorite(prev => !prev);
      const result = !favorite
        ? dispatch(addToFavorite(id))
        : dispatch(deleteFromFavorite(id));
      return result;
    } else {
      Notify.warning('Please, signup or login to add notice to favorites');
    }
  };

  return createPortal(
    <div className={css.modal}>
      <div onClick={closeModal} className={css.overlay}></div>
      <div className={css.content}>
        <div className={css.imgWrap}>
          <img src={src} alt="" className={css.avatar} />
          <div className={css.optionContainer}>
            <p className={css.optionText}>{category}</p>
          </div>
        </div>
        <div className={css.contentWrap}>
          <h2 className={css.title}>{title}</h2>
          <div className={css.listWrap}>
            <ul>
              <li className={css.item}>
                <p className={css.itemTitle}>Name:</p>
              </li>
              <li className={css.item}>
                <p className={css.itemTitle}>Birthday:</p>
              </li>
              <li className={css.item}>
                <p className={css.itemTitle}>Breed:</p>
              </li>
              <li className={css.item}>
                <p className={css.itemTitle}>Place:</p>
              </li>
              <li className={css.item}>
                <p className={css.itemTitle}>The sex:</p>
              </li>
              <li className={css.item}>
                <p className={css.itemTitle}>Email:</p>
              </li>
              <li className={css.item}>
                <p className={css.itemTitle}>Phone:</p>
              </li>
            </ul>
            <ul className={css.descriptionList}>
              <li className={css.item}>
                <p className={css.description}>{name}</p>
              </li>
              <li className={css.item}>
                <p className={css.description}>{birthday}</p>
              </li>
              <li className={css.item}>
                <p className={css.description}>{breed}</p>
              </li>
              <li className={css.item}>
                <p className={css.description}>{location}</p>
              </li>
              <li className={css.item}>
                <p className={css.description}>{sex}</p>
              </li>
              <li className={css.item}>
                <p className={`${css.description} ${css.contacts}`}>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </li>
              <li className={css.item}>
                <p className={`${css.description} ${css.contacts}`}>
                  <a href={`tel:${phone}`}>{phone}</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.textWrap}>
          <p className={css.textContent}>Comments: {comments}</p>
        </div>
        <div className={css.wrap}>
          <Contact />
          <AddToFavorite onClick={onFavBtnClick} favorite={favorite} />
        </div>
        <button className={css.closeBtn} onClick={closeModal}>
          <AiOutlineClose className={css.closeIcon} />
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalNotice;

ModalNotice.propTypes = {
  closeModal: propTypes.func,
  title: propTypes.string,
  comments: propTypes.string,
  category: propTypes.string,
  breed: propTypes.string,
  name: propTypes.string,
  location: propTypes.string,
  birthday: propTypes.string,
  sex: propTypes.string,
  src: propTypes.string,
  // onClick: propTypes.func.isRequired,
  selector: propTypes.string,
};
