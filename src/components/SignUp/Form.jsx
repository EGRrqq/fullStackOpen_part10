import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from '../TextInput/Formik';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 5,
    },
    button: {
        backgroundColor: theme.colors.blueColor,
        alignItems: 'center',
        padding: 15,
        margin: 8,
        borderRadius: 5,
    },  
});

const SignUpForm = ({ onSubmit, errors }) => {
  const buttonStyle = [
    styles.button,
    (errors.username || errors.password || errors.passwordConfirm) && {
      opacity: 0.5,
    },
  ];

  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput
        name='password'
        placeholder='Password'
        secureTextEntry={true}
      />
      <FormikTextInput
        name='passwordConfirm'
        placeholder='Password confirmatiom'
        secureTextEntry={true}
      />
      <Pressable
        onPress={onSubmit}
        style={buttonStyle}
        disabled={errors.username || errors.password || errors.passwordConfirm}
      >
        <Text color='colorWhite' fontWeight='bold'>
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;