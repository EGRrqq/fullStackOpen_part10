import { Formik } from 'formik';
import SignInForm from './Form';
import useSignIn from '../../hooks/useSignIn';
import * as yup from 'yup';

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn(username, password);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

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
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;