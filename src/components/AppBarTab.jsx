import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    tab:{
      padding:20,
    }
  });

const AppBarTab = ({ title }) => {
    return(
      <Pressable>
        <Text 
        fontSize="subheading" 
        fontWeight="bold" 
        color="colorWhite"
        style={styles.tab}>
          {title}
        </Text>
      </Pressable>
    )
  }

  export default AppBarTab;