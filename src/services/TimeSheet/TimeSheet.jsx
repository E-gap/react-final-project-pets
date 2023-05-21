import css from './TimeSheet.module.css';
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const TimeSheet = ({ workDays }) => {
  const [state, setState] = useState([]);

  const defaultState = [
    { id: 1, from: 'day', to: 'night' },
    { id: 2, from: 'day', to: 'night' },
    { id: 3, from: 'day', to: 'night' },
    { id: 4, from: 'day', to: 'night' },
    { id: 5, from: 'day', to: 'night' },
    { id: 6, from: 'day', to: 'night' },
    { id: 7, from: 'day', to: 'night' },
  ];

  const time = state.reduce(
    (prev, cur) => (cur?.isOpen > prev.isOpen ? cur : prev),
    {
      isOpen: -Infinity,
    }
  );

  useEffect(() => {
    if (workDays) {
      setState(workDays);
    } else {
      return;
    } 
  }, [workDays]);

  console.log(state)
  
  const elements = state.map((item, index) => (
    <li key={index} className={css.timeItem}>
      {item.isOpen && (<p>{item.from}-{item.to}</p>)}
      {!item.isOpen && <p className={css.itemClose}>Close</p>}
    </li>
  ));

  const defaultElements = defaultState.map(item => (
    <li key={item.id} className={css.timeItem}>
      <p>
        {item.from} and {item.to}
      </p>
    </li>
  ));

  return (
    <>
      <button className={css.timeText}>
        <p className={css.textTitle}>Time:</p>

        <p>{time.from ? `${time.from} - ${time.to}` : 'day and night'}</p>
      </button>
      <div className={css.timeContainer}>
        <div className={css.sheetContainer}>
          <ul className={css.timeList}>
            <li className={css.timeItem}>
              <p>MN</p>
            </li>
            <li className={css.timeItem}>
              <p>TU</p>
            </li>
            <li className={css.timeItem}>
              <p>WE</p>
            </li>
            <li className={css.timeItem}>
              <p>TH</p>
            </li>
            <li className={css.timeItem}>
              <p>FR</p>
            </li>
            <li className={css.timeItem}>
              <p>SA</p>
            </li>
            <li className={css.timeItem}>
              <p>SU</p>
            </li>
          </ul>
          <ul className={css.timeList}>{elements.length ? elements : defaultElements}</ul>
        </div>
      </div>
    </>
  );
};

export default TimeSheet;

TimeSheet.propTypes = {
  workDays: PropTypes.array,
};
