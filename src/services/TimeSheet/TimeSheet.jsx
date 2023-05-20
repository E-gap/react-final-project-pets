import css from './TimeSheet.module.css';
// import { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const TimeSheet = ({ workDays }) => {
  // const [MN, setMN] = useState({});

  // const monday = () => {
  //   const day = workDays[1];
  //   if (day) {
  //     setMN(day);
  //     console.log(day);
  //   } else {
  //     return
  //   }
  // }
 
  // useEffect(() => {
  //   monday();
  // }, [monday]);

  return (
    <>
      <button className={css.timeText}>
        <p className={css.textTitle}>Time:</p>
        <p>8:00-19:00</p>
      </button>
      <div className={css.timeContainer}>
        <ul className={css.timeList}>
          <li className={css.timeItem}>
            <p>MN</p>
            <p>8:00-19:00</p>
          </li>
          <li className={css.timeItem}>
            <p>TU</p>
            <p>8:00-19:00</p>
          </li>
          <li className={css.timeItem}>
            <p>WE</p>
            <p>8:00-19:00</p>
          </li>
          <li className={css.timeItem}>
            <p>TH</p>
            <p>8:00-19:00</p>
          </li>
          <li className={css.timeItem}>
            <p>FR</p>
            <p>8:00-19:00</p>
          </li>
          <li className={css.timeItem}>
            <p>SA</p>
            <p>8:00-19:00</p>
          </li>
          <li className={css.timeItem}>
            <p>SU</p>
            <p>8:00-19:00</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TimeSheet;

TimeSheet.propTypes = {
  workDays: PropTypes.array,
};
