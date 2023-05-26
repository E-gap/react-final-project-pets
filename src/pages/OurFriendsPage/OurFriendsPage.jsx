import css from './OurFriendsPage.module.css';
import { useState, useEffect } from 'react';
import TimeSheet from 'services/TimeSheet/TimeSheet';
import defaultImg from './petImg.png';
import { instance } from 'redux/auth/authOperations';
import { Audio } from 'react-loader-spinner';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await instance.get('/friends');
        setFriends(response.data);
        setIsLoading(false);
        setError('');
        return response.data;
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
        return error.message;
      }
    };
    getFriends();
  }, []);

  const elements = friends.map(item => (
    <li key={item._id} className={css.item}>
      <a
        href={item.url}
        className={css.itemTitle}
        target="_blank"
        rel="noreferrer"
      >
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
            <a
              href={item.addressUrl}
              target="_blank"
              rel="noreferrer"
              className={css.itemText}
            >
              <p className={css.textTitle}>Address:</p>
              <p>{item.address ? item.address : 'website only'}</p>
            </a>
          </li>
          <li>
            {item.email && (
              <a href={`mailto:${item.email}`} className={css.itemText}>
                <p className={css.textTitle}>Email:</p>
                <p>{item.email}</p>
              </a>
            )}
            {!item.email && (
              <div className={css.itemText}>
                <p className={css.textTitle}>Email:</p>
                <p>phone only</p>
              </div>
            )}
          </li>
          <li>
            {item.phone && (
              <a href={`tel:${item.phone}`} className={css.itemText}>
                <p className={css.textTitle}>Phone:</p>
                <p>{item.phone}</p>
              </a>
            )}
            {!item.phone && (
              <div className={css.itemText}>
                <p className={css.textTitle}>Phone:</p>
                <p>email only</p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </li>
  ));

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Our friends</h1>
        {error ? <p className={css.error}>{error}</p> : ''}
        {!isLoading ? (
          <ul className={css.list}>{elements}</ul>
        ) : (
          <div className={css.preloader}>
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default OurFriendsPage;
