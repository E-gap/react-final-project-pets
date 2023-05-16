import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

const MoreInfo = ({ category, fileInput, setFileInput }) => {
  return (
    <div className="personal-form-wrapper">
      {/* Відображення вибору статі тільки для певних категорій */}
      {category !== 'your-pet' && (
        <div className="add-form-sex-wrapper">
          <p>The Sex</p>
          <label>
            <Field
              type="radio"
              name="sex"
              value="female"
              className="add-form-radio-button"
            />
            Female
          </label>
          <label>
            <Field
              type="radio"
              name="sex"
              value="male"
              className="add-form-radio-button"
            />
            Male
          </label>
        </div>
      )}

      {/* Відображення поля для вибору фото */}
      <label htmlFor="pet-image" className="add-form-image-label">
        Add photo
        <div className="add-form-image-wrapper">
          {!fileInput && <div>File not selected</div>}
          {!!fileInput && (
            <img
              id="image"
              src={URL.createObjectURL(fileInput)}
              alt={fileInput.name}
            />
          )}
        </div>
        <input
          type="file"
          id="pet-image"
          name="pet-image"
          accept=".png, .jpg, .jpeg, .webp"
          onChange={(event) => setFileInput(event.target.files[0])}
          className="file-input"
        />
        <ErrorMessage name="pet-image" component="div" />
      </label>

      {/* Відображення поля для введення розташування тільки для певних категорій */}
      {category !== 'your-pet' && (
        <label htmlFor="location" className="add-form-label">
          Location
          <Field
            placeholder="Type of location"
            type="text"
            name="location"
            className="add-form-input"
          />
          <ErrorMessage name="location" component="div" />
        </label>
      )}

      {/* Відображення поля для введення ціни тільки для категорії "sell" */}
      {category === 'sell' && (
        <label htmlFor="price" className="add-form-label">
          Price
          <Field
            placeholder="Type of price"
            type="text"
            name="price"
            className="add-form-input"
          />
          <ErrorMessage name="price" component="div" />
        </label>
      )}

      {/* Відображення поля для введення коментарів */}
      <label htmlFor="comments" className="add-form-label">
        Comments
       
<Field
       as="textarea"
       placeholder="Type comments"
       name="comments"
       className="add-form-text-area"
     />
<ErrorMessage name="comments" component="div" />
</label>
</div>
);
};

MoreInfo.propTypes = {
category: PropTypes.string.isRequired,
fileInput: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
setFileInput: PropTypes.func.isRequired,
};

export default MoreInfo






