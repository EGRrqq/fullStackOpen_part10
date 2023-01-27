import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundMainColor,
    paddingBottom: 5,
    flexGrow: 1,
    //flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;