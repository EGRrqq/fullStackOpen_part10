import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ title }) => {
    return(
      <Pressable>
        <Text 
        fontSize="subheading" 
        fontWeight="bold" 
        color="colorWhite"
        style={{ padding: 20 }}>
          {title}
        </Text>
      </Pressable>
    )
  }

  export default AppBarTab;