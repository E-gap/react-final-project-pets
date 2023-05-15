import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';


const MoreInfo = ({ category, fileInput, setFileInput }) => {
  const handleAddAvatar = e => {
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
      console.log({ file });
    }
  };

  return (
    <div className="personal-form-wrapper">
    {category !== 'your-pet' && (
      <div className="add-form-sex-wrapper">
        <p>The Sex</p>
        <input
          type="radio"
          id="female"
          name="sex"
          value="female"
          className="add-form-radio-button"
        />
        <label htmlFor="female" className="add-form-sex-label">
          
          Female
        </label>
        <input
          type="radio"
          id="male"
          name="sex"
          value="male"
          className="add-form-radio-button"
        />
        <label htmlFor="male" className="add-form-sex-label">
         
          Male
        </label>
      </div>
    )}
    <label htmlFor="pet-image" className="add-form-image-label">
      Add photo
      <div className="add-form-image-wrapper">
        {!fileInput }
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
        onChange={handleAddAvatar}
        className="file-input"
      />
      <ErrorMessage name="pet-image" component="div" />
    </label>
    {category !== 'your-pet' && (
      <label htmlFor="location" className="add-form-label">
        Location
        <input
          placeholder="Type of location"
          type="text"
          name="location"
          className="add-form-input"
        />
        <ErrorMessage name="location" component="div" />
      </label>
    )}
    {category === 'sell' && (
      <label htmlFor="price" className="add-form-label">
        Price
        <input
          placeholder="Type of price"
          type="text"
          name="price"
          className="add-form-input"
        />
        <ErrorMessage name="price" component="div" />
      </label>
    )}
    <label htmlFor="comments" className="add-form-label">
      Comments
      <textarea
        placeholder="Type comments"
        name="comments"
        className="add-form-text-area"
      />
      <ErrorMessage name="comments" component="div" />
    </label>
  </div>);
};

MoreInfo.propTypes = {
  category: PropTypes.string.isRequired,
  fileInput: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  setFileInput: PropTypes.func.isRequired,
};

export default MoreInfo;







