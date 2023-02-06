import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { REGISTER } from '../../graphql/mutations';
import useSignIn from '../../hooks/useSignIn';
import SignUpContainer from './Container';

const SignUp = () => {
  const [signIn] = useSignIn();
  const [mutate] = useMutation(REGISTER);
  const navigate = useNavigate();

  const submit = async (values) => {
    const { username, password } = values;
    try {
      await mutate({ variables: { user: { username, password } } });
      await signIn(username, password);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={submit} />;
};

export default SignUp;