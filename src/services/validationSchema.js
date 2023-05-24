import * as Yup from 'yup';

const validationSchema = {
  0: Yup.object().shape({
    category: Yup.string().required('Category is required'),
  }),
  1: Yup.object().shape({
    title: Yup.string().when('category', 
    { is: Yup.string().oneOf(['sell', 'lost-found', 'good-hands']), then: Yup.string()
.required('Title is required').min(4,"min 4 exeet")}),

name: Yup.string()
.required('Name is required')
.min(2, 'Name must be at least 2 characters')
.max(16, 'Name must not exceed 16 characters'),
birthday: Yup.string()
.required('Date is required')
.matches(
  /^(\d{2})\.(\d{2})\.(\d{4})$/,
  'Invalid date format. Use DD.MM.YYYY'
),
breed: Yup.string()
.required('Breed is required')
.min(2, 'Breed must be at least 2 characters')
.max(16, 'Breed must not exceed 16 characters'),
  }),
  2: Yup.object().shape({
    photo: Yup.mixed()
    .required('File is required')
    .test(
      'fileSize',
      'File size must not exceed 3MB',
      value => value && value.size <= 3 * 1024 * 1024
    ),
   
    location: Yup.string().when('category', {
      is: value => ['sell', 'lost-found', 'for-free'].includes(value),
      then: Yup.string()
        .required('Location is required')
        .matches(/^[A-Za-z\s]+$/, 'Invalid location format'),
    }),
    comments: Yup.string()
      .min(4, 'Comments should be at least 4 characters')
      .max(120, 'Comments should not exceed 120 characters'),
  }),
};

export default validationSchema;  
