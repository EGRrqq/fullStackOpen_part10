import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundBarColor,
    display: 'flex',
    flexDirection: 'row',
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title="Repositories"/>
    </View>
  );
};

export default AppBar;