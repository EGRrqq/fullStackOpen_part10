import * as yup from 'yup';
import SignUpForm from './Form';
import { Formik } from 'formik';

const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    username: yup.string().min(1).max(30).required('Username is Required'),
    password: yup.string().min(5).max(50).required('Password is required'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required('Password confirm is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, errors }) => {
        return <SignUpForm onSubmit={handleSubmit} errors={errors} />;
      }}
    </Formik>
  );
};

export default SignUpContainer;