import React from 'react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import AddToFavorite from './temporary/tempAddToFavorite';

import css from './ModalNotice.module.css';

const modalRoot = document.querySelector('#notice-modal-root');

const ModalNotice = ({
  closeModal,
  title,
  comments,
  price,
  category,
  breed,
  name,
  location,
  birthday,
  sex,
  src,
}) => {
  // const [modal, setModal] = useState(false);

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  // if (modal) {
  //   document.body.classList.add('active-modal');
  // } else {
  //   document.body.classList.remove('active-modal');
  // }
  // close on Escape
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // phone, Email :

  useEffect(() => {
    // Simulating data fetching from backend
    // Replace with your actual API call
    fetch('your-backend-api-endpoint')
      .then(response => response.json())
      .then(data => {
        setPhone(data.phone);
        setEmail(data.email);
      })
      .catch(error => {
        console.log('Error fetching data from backend:', error);
      });
  }, []);

  // const handlePhoneChange = e => {
  //   setPhone(e.target.value);
  // };

  // const handleEmailChange = e => {
  //   setEmail(e.target.value);
  // };

  const handlePhoneClick = () => {
    // Perform phone contact logic
    console.log('Contacting via phone:', phone);
  };

  const handleEmailClick = () => {
    // Perform email contact logic
    console.log('Contacting via email:', email);
  };

  return (
    // <>
    //   {/* temporary button to open modal  */}
    //   <button onClick={toggleModal} className={css.openBtn}>
    //     Open
    //   </button>

    //   {modal && (
    //     <div className="modal">
    //       <div onClick={toggleModal} className={css.overlay}></div>
    //       <div className={css.content}>
    //         <div className={css.imgWrap}>
    //           <img src="" alt="" className={css.image} />
    //           <div className={css.optionContainer}>
    //             <p className={css.optionText}>option back</p>
    //           </div>
    //         </div>
    //         <div className={css.contentWrap}>
    //           <h2 className={css.title}>Title from BACKEND</h2>
    //           <ul>
    //             <li className={css.item}>
    //               <p className={css.itemTitle}>Name:</p>
    //               <p className={css.description}>back</p>
    //             </li>
    //             <li className={css.item}>
    //               <p className={css.itemTitle}>Birthday:</p>
    //               <p className={css.description}>back</p>
    //             </li>
    //             <li className={css.item}>
    //               <p className={css.itemTitle}>Breed:</p>
    //               <p className={css.description}>back</p>
    //             </li>
    //             <li className={css.item}>
    //               <p className={css.itemTitle}>Place:</p>
    //               <p className={css.description}>back</p>
    //             </li>
    //             <li className={css.item}>
    //               <p className={css.itemTitle}>The sex:</p>
    //               <p className={css.description}>back</p>
    //             </li>
    //             <li className={css.item}>
    //               <p className={css.itemTitle}>Email:</p>
    //               <p className={css.description}>
    //                 <a href={`mailto:${email}`} onClick={handleEmailClick}>
    //                   {email}
    //                 </a>
    //               </p>
    //             </li>
    //             <li className={css.item}>
    //               <p className={css.itemTitle}>Phone:</p>
    //               <p className={css.description}>
    //                 <a href={`tel:${phone}`} onClick={handlePhoneClick}>
    //                   {phone}
    //                 </a>
    //               </p>
    //             </li>
    //             <li className={css.item}>
    //               <p className={css.itemTitle}>Comments:</p>
    //               <p className={css.description}>back</p>
    //             </li>
    //           </ul>
    //           <div className={css.wrap}>
    //             <button className={css.button}>Contact</button>
    //             <AddToFavorite />
    //           </div>
    //         </div>
    //         <button className={css.closeBtn} onClick={toggleModal}>
    //           <AiOutlineClose className={css.closeIcon} />
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </>
    createPortal(
      <div className="modal">
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
                {/* <p className={css.description}>{name}</p> */}
              </li>
              <li className={css.item}>
                <p className={css.itemTitle}>Birthday:</p>
                {/* <p className={css.description}>{birthday}</p> */}
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
                <p className={css.description}>
                  <a href={`mailto:${email}`} onClick={handleEmailClick}>
                    {email}
                  </a>
                </p>            
                </li>
                <li className={css.item}>
                  <p className={css.description}>
                  <a href={`tel:${phone}`} onClick={handlePhoneClick}>
                    {phone}
                  </a>
                </p>   
                </li>
            </ul>
            </div>
            {/* <div className={css.textWrap}>
            <p className={css.textContent}>Comments: {comments}</p>
            </div>
            <div className={css.wrap}>
              <button className={css.button}>Contact</button>
              <AddToFavorite />
            </div> */}
          </div>
          <div className={css.textWrap}>
            <p className={css.textContent}>Comments: {comments}</p>
            </div>
            <div className={css.wrap}>
              <button className={css.button}>Contact</button>
              <AddToFavorite />
            </div>
          <button className={css.closeBtn} onClick={closeModal}>
            <AiOutlineClose className={css.closeIcon} />
          </button>
        </div>
      </div>,
      modalRoot
    )
  );
};

export default ModalNotice;
