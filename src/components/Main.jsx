import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import theme from '../theme';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from "./SignIn";
import SignUp from './SignUp';
import Repository from './Repository';
import CreateReview from './CreateReview';

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
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/:id' element={<Repository />} />
        <Route path='/review' element={<CreateReview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;