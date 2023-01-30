import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  validInput: {
    borderColor: theme.colors.textSecondary, 
    borderStyle: 'solid', 
    borderRadius: 5,
    borderWidth: 1, 
  },
  errorInput: {
    color: theme.colors.textError,
    borderColor: theme.colors.textError,
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 1,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    !error && styles.validInput,
    error && styles.errorInput,
  ];
  // console.log(error);
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;