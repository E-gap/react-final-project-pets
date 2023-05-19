import * as Yup from 'yup';

const validationSchema = {
  0: Yup.object().shape({
    category: Yup.string().required('Category is required'),
  }),
  1: Yup.object().shape({
    // title: Yup.string().required('Title is required'),
    name: Yup.string().required('Name is required').min(2, 'Too short!').max(16, 'Too long!'),
    birthday: Yup.string().required('Birthday is required').matches(
      /^([0-9]{2}).([0-9]{2}).([0-9]{4})$/,
      'Invalid date format. Use DD.MM.YYYY'
    ),
    breed: Yup.string().required('Breed is required').min(2, 'Breed should be at least 2 characters').max(16, 'Breed should not exceed 16 characters'),
  }),
  2: Yup.object().shape({
    image: Yup.mixed().test('fileSize', 'File size too large', (value) => !value || value.size <= 5000000),
    location: Yup.string().required('Location is required'),
    price: Yup.number().when('category', {
      is: 'sell',
      then: Yup.number().required('Price is required').min(1, 'Price should be more than 0'),
    }),
    comments: Yup.string().min(4, 'Comments should be at least 4 characters').max(120, 'Comments should not exceed 120 characters'),
  }),
};

export default validationSchema;