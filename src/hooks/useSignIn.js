import { useMutation, useApolloClient } from "@apollo/client";
import useAuthStorage from '../hooks/useAuthStorage';
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE)
  const client = useApolloClient();
  const authStorage = useAuthStorage();

  const signIn = async (username, password) => {
    const {data} = await mutate({variables: {credentials: {username: username, password: password}}})
    await authStorage.setAccessToken(data.authenticate.accessToken)
    client.resetStore();
  }

  return [signIn, result];
}

export default useSignIn;