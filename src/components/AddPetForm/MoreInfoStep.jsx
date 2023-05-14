import React from "react";

const MoreInfoStep = ({
  petInfo,
  handleInputChange,
  handleImageUpload,
  handleBack,
  handleNext,
  handleDone,
  handleCancel,
  validationErrors,
}) => {
  return (
    <div>
      <h2> More info</h2>
      <form>
        <div>
          <label htmlFor="image">Add a photo of your pet:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload }
          />
          {validationErrors && validationErrors.image && (<span className="error">{validationErrors.image}</span>
          )}
        </div>
        <div>
          <label htmlFor="comments">Add any personal comments:</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            // value={petInfo.comments ? petInfo.comments : 'тш'}
            onChange={handleInputChange}
          /> 
        </div>
      </form>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};

export default MoreInfoStep;
