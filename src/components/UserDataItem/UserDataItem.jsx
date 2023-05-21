import css from './UserDataItem.module.css';
import edit from '../../images/UserPage/edit.svg';
import check from '../../images/UserPage/check.svg';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const UserDataItem = ({ id, initialValue = '', active = '', onFocus, onBlur, onSave }) => {
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  const inputRef = useRef();

  const handleSave = () => {
    setDisabled(true);
    onBlur(id);
    if (onSave && initialValue !== value) onSave(id, value);
  };

  const handleFocus = () => {
    if (active) return;
    setDisabled(false);
    if (inputRef.current) inputRef.current.focus();
    if (onFocus) onFocus(id);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (active !== id && active) handleSave();
  }, [active, handleSave, id]);

  return (
    <div className={css.container} data-not-editable={active && active !== id}>
      <input type='text'
             className={css.input}
             id={id}
             value={value}
             onChange={(e) => setValue(e.target.value)}
             disabled={disabled}
             data-disabled={disabled}
             ref={inputRef}
      />
      <img className={css.editIcon} src={disabled ? edit : check} alt='Edit icon' width={24} height={24}
           onClick={() => {
             if (disabled) {
               handleFocus();
             } else {
               handleSave();
             }
           }} />
    </div>
  );
};

UserDataItem.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  active: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onSave: PropTypes.func,
};

export default UserDataItem;

