import { Formik } from 'formik';
import SignInForm from './SignInForm';

const SignIn = () => {
    const initialValues = {
        username: '',
        password: '',
      };
    
      return (
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      );
};

export default SignIn;