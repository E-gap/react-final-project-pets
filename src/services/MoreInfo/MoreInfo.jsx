import { Field, ErrorMessage, useFormikContext } from 'formik';
import { useMediaQuery } from 'react-responsive';
import classnames from 'classnames';

import PropTypes from 'prop-types';

import { BsPlusLg, BsGenderFemale, BsGenderMale } from 'react-icons/bs';

import css from './MoreInfo.module.css';

const MoreInfo = ({
  category,
  errors,
  touched,
  validateLocation,
  validatePrice,
  validateComments,
}) => {
  const { setFieldValue, values } = useFormikContext();

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const handleInputChange = e => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFieldValue(name, files[0]);
    } else {
      setFieldValue(name, value);
    }
  };

  return (
    <div
      className={css.form}
      style={{
        flexDirection:
          isTabletOrDesktop && category === 'your-pet'
            ? 'column'
            : isMobile
            ? 'column'
            : 'row',
      }}
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
          style={{
            flexDirection:
              category === 'your-pet' ? 'row' : isMobile ? 'row' : 'column',
          }}
        >
          <span
            className={css.addPhoto}
            style={{
              marginRight: category === 'your-pet' && isMobile ? '33px' : '0',
            }}
          >
            {category !== 'your-pet' && !isMobile
              ? 'Load the pet’s image:'
              : 'Add photo'}
          </span>
          <div className={css.imgWrapper}>
            {values.photo ? (
              <img
                className={css.img}
                src={URL.createObjectURL(values.photo)}
                alt={values.photo.name}
              />
            ) : (
              <BsPlusLg className={css.plus} />
            )}
          </div>
          <input
            type="file"
            name="photo"
            accept=".png, .jpg, .jpeg, .webp"
            onChange={handleInputChange}
            className={css.fileInput}
          />
          <ErrorMessage name="photo" component="div" />
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
              validate={validateLocation}
              className={classnames(css.field, {
                [css.errorField]: errors.location && touched.location,
                [css.validField]: !errors.location && touched.location,
              })}
            />
            <div className={css.errorMsg}>
              <ErrorMessage name="location" component="div" />
            </div>
            {!errors.location && touched.location && (
              <div className={css.validMsg}>
                <p>Location is valid</p>
              </div>
            )}
          </label>
        )}
        {category === 'sell' && (
          <label className={css.label}>
            <span className={css.labelText}>Price</span>
            <Field
              placeholder="Type of price"
              type="text"
              name="price"
              validate={validatePrice}
              className={classnames(css.field, {
                [css.errorField]: errors.price && touched.price,
                [css.validField]: !errors.price && touched.price,
              })}
            />
            <div className={css.errorMsg}>
              <ErrorMessage name="price" component="div" />
            </div>
            {!errors.price && touched.price && (
              <div className={css.validMsg}>
                <p>Price is valid</p>
              </div>
            )}
          </label>
        )}
        <label className={css.label}>
          <span className={css.labelText}>Comments</span>
          <Field
            as="textarea"
            placeholder="Type comments"
            name="comments"
            validate={validateComments}
            className={classnames(css.comments, {
              [css.errorComments]: errors.comments && touched.comments,
              [css.validComments]: !errors.comments && touched.comments,
            })}
            style={{
              height:
                category === 'lost-found' || category === 'good-hands'
                  ? '182px'
                  : '79px',
            }}
          />
          <div className={css.errorMsgComments}>
            <ErrorMessage name="comments" component="div" />
          </div>
          {!errors.comments && touched.comments && (
            <div className={css.validMsgComments}>
              <p>Comment is valid</p>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

MoreInfo.propTypes = {
  category: PropTypes.string.isRequired,
  errors: PropTypes.any,
  touched: PropTypes.any,
  validateLocation: PropTypes.func,
  validatePrice: PropTypes.func,
  validateComments: PropTypes.func,
};

export default MoreInfo;
