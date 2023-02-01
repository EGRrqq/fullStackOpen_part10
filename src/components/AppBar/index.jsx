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

  console.log('1',data);
  console.log('2',data.me);
  
  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>        
        <AppBarTab title="Repository" path="/" />
        {data && data.me ? (
          <Pressable
            style={{ padding: 20 }}
            onPress={handleSignOut}
          >
            <Text 
              color='colorWhite'
              fontWeight="bold"
              fontSize='subheading'
            >
              Sign Out
            </Text>
          </Pressable>
        ) : (
          <AppBarTab title="Sign In" path="/sign-in" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;