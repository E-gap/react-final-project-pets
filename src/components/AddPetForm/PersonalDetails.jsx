import React, { useState } from 'react';

function PersonalDetails({ onNext, onBack, petInfo }) {
  const [name, setName] = useState(petInfo?.name || '');
  const [birthdate, setBirthdate] = useState(petInfo?.birthdate || '');
  const [breed, setBreed] = useState(petInfo?.breed || '');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  const handleNext = () => {
    if (name && birthdate && breed) {
      onNext({ name, birthdate, breed });
    }
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Birthdate:
        <input type="text" value={birthdate} onChange={handleBirthdateChange} />
      </label>
      <label>
        Breed:
        <input type="text" value={breed} onChange={handleBreedChange} />
      </label>
      <button onClick={onBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PersonalDetails;
