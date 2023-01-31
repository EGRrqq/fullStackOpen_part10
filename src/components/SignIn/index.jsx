import { Formik } from 'formik';
import SignInForm from './Form';
import * as yup from 'yup';

const SignIn = () => {
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
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      );
};

export default SignIn;