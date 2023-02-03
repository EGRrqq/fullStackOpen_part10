import { Formik } from 'formik';
import SignInForm from './Form';
import * as yup from 'yup';

const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('username is required'),
    password: yup
      .string()
      .required('password is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInContainer;