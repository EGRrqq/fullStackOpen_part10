import * as yup from 'yup';
import { Formik } from 'formik';
import ReviewForm from './Form';

const ReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
  };

  const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Owner name is Required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup.number().min(0).max(100).required(),
    text: yup.string().nullable(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) => <ReviewForm onSubmit={handleSubmit} errors={errors} />}
    </Formik>
  );
};

export default ReviewContainer;