import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useQuery, useApolloClient } from '@apollo/client';
import useAuthStorage from '../../hooks/useAuthStorage';
import { ME } from '../../graphql/queries';
import theme from '../../theme';
import Constants from 'expo-constants';
import AppBarTab from './Tab';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundBarColor,
    display: 'flex',
    flexDirection: 'row',
  }
});

const AppBar = () => {
  const client = useApolloClient();
  const authStorage = useAuthStorage();

  const { data } = useQuery(ME);
  const currentUser = data?.me;

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>        
        <AppBarTab title="Repository" path="/" />
        {currentUser ? (
          <>
           <Text 
              color='colorWhite'
              fontWeight="bold"
              fontSize='subheading'
              onPress={handleSignOut}
              style={{ padding: 20 }}
            >
              Sign Out
            </Text>
            <AppBarTab title='Create a review' path='/review' />
          </>
        ) : (
          <AppBarTab title="Sign In" path="/sign-in" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;