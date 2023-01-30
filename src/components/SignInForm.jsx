import { View, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 5,
    },
    buttton: {
        backgroundColor: theme.colors.blueColor,
        alignItems: 'center',
        padding: 15,
        margin: 8,
        borderRadius: 5,
    },
})

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
          <FormikTextInput name='username' placeholder='Username' />
          <FormikTextInput
            name='password'
            placeholder='Password'
            secureTextEntry={true}
          />
          <Pressable onPress={onSubmit} style={styles.buttton}>
            <Text color='colorWhite' fontWeight='bold'>
              Sign In
            </Text>
          </Pressable>
        </View>
      );
}

export default SignInForm;