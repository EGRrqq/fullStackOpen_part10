import { Link } from 'react-router-native'; 
import Text from '../Text';

const AppBarTab = ({ title, path }) => {
    return(
      <Link to={path}>
        <Text 
        fontSize="subheading" 
        fontWeight="bold" 
        color="colorWhite"
        style={{ padding: 20 }}>
          {title}
        </Text>
      </Link>
    )
  }

  export default AppBarTab;