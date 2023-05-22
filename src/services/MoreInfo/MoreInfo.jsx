import { Field, ErrorMessage /* validateYupSchema */ } from 'formik';
import PropTypes from 'prop-types';

import { BsPlusLg, BsGenderFemale, BsGenderMale } from 'react-icons/bs';

import css from './MoreInfo.module.css';

const MoreInfo = ({ category, fileInput, setFileInput }) => {
  return (
    <div
      className={css.form}
      style={{ flexDirection: category === 'your-pet' ? 'column' : 'row' }}
    >
      <div className={css.inputWrapper}>
        {category !== 'your-pet' && (
          <div>
            <p className={css.genderHeader}>The Sex</p>
            <div className={css.genderWrapper}>
              <label className={css.genderLabel}>
                <Field
                  type="radio"
                  name="sex"
                  value="female"
                  className={css.genderBtn + ' ' + css.femaleBtn}
                />
                <BsGenderFemale className={css.femaleIcon} />
                <span className={css.genderLabelText}>Female</span>
              </label>
              <label className={css.genderLabel}>
                <Field
                  type="radio"
                  name="sex"
                  value="male"
                  className={css.genderBtn + ' ' + css.maleBtn}
                />
                <BsGenderMale className={css.maleIcon} />
                <span className={css.genderLabelText}>Male</span>
              </label>
            </div>
          </div>
        )}

        <label
          className={css.fileLabel}
          style={{ flexDirection: category === 'your-pet' ? 'row' : 'column' }}
        >
          <span
            className={css.addPhoto}
            style={{
              marginRight: category === 'your-pet' ? '33px' : '0',
            }}
          >
            {category !== 'your-pet' ? 'Load the pet’s image:' : 'Add photo'}
          </span>
          <div className={css.imgWrapper}>
            {fileInput ? (
              <img
                className={css.img}
                src={URL.createObjectURL(fileInput)}
                alt={fileInput.name}
              />
            ) : (
              <BsPlusLg className={css.plus} />
            )}
          </div>
          <input
            type="file"
            name="photo"
            accept=".png, .jpg, .jpeg, .webp"
            onChange={event => setFileInput(event.target.files[0])}
            className={css.fileInput}
          />
          <ErrorMessage name="pet-image" component="div" />
        </label>
      </div>
      <div className={css.inputWrapper}>
        {category !== 'your-pet' && (
          <label className={css.label}>
            <span className={css.labelText}>Location</span>
            <Field
              placeholder="Type of location"
              type="text"
              name="location"
              className={css.field}
            />
            <ErrorMessage name="location" component="div" />
          </label>
        )}
        {category === 'sell' && (
          <label className={css.label}>
            <span className={css.labelText}>Price</span>
            <Field
              placeholder="Type of price"
              type="text"
              name="price"
              className={css.field}
            />
            <ErrorMessage name="price" component="div" />
          </label>
        )}
        <label className={css.label}>
          <span className={css.labelText}>Comments</span>
          <Field
            as="textarea"
            placeholder="Type comments"
            name="comments"
            className={css.comments}
            style={{
              height:
                category === 'lost-found' || category === 'good-hands'
                  ? '182px'
                  : '79px',
            }}
          />
          <ErrorMessage name="comments" component="div" />
        </label>
      </div>
    </div>
  );
};

MoreInfo.propTypes = {
  category: PropTypes.string.isRequired,
  fileInput: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  setFileInput: PropTypes.func.isRequired,
};

export default MoreInfo;
