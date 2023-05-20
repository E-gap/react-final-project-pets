import css from './OurFriendsPage.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TimeSheet from 'services/TimeSheet/TimeSheet';
import defaultImg from "./petImg.png"

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  // console.log(friends)

  const getFriends = async () => {
    try {
      const  response = await instance.get('/friends');
      setFriends(response.data);
      return response.data;
    } catch (error) {
      return error.message;
    }
    
  };

useEffect(() => {
  getFriends();
},[])
  
  const noReload = () => {
    elements.preventdefault();
  }

  const elements = friends.map(item => (
    <li key={item._id} className={css.item}>
      <a href={item.url} className={css.itemTitle}>
        {item.title}
      </a>
      <div className={css.itemWrapper}>
        <img
          className={css.itemLogo}
          src={item.imageUrl ? item.imageUrl : defaultImg}
          alt="logo"
        />
        <ul className={css.itemList}>
          <li>
            <TimeSheet workDays={item.workDays} />
          </li>
          <li>
            <a href={item.addressUrl} className={css.itemText}>
              <p className={css.textTitle}>Address:</p>
              <p>{item.address ? item.address : 'website only'}</p>
            </a>
          </li>
          <li>
            <a
              href={item.email ? `mailto:${item.email}`: noReload}
              className={css.itemText}
            >
              <p className={css.textTitle}>Email:</p>
              <p>{item.email ? item.email : 'phone only'}</p>
            </a>
          </li>
          <li>
            <a
              href={item.phone ? `tel:${item.phone}`: noReload}
              className={css.itemText}
            >
              <p className={css.textTitle}>Phone:</p>
              <p>{item.phone ? item.phone : 'email only'}</p>
            </a>
          </li>
        </ul>
      </div>
    </li>
  ));

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Our friends</h1>
        <ul className={css.list}>{elements}</ul>
      </div>
    </section>
  );
};

export default OurFriendsPage;
