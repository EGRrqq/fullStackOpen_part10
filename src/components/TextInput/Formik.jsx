import { StyleSheet } from 'react-native';
import { useField } from 'formik';
import theme from '../../theme';

import TextInput from '.';
import Text from '../Text';

const styles = StyleSheet.create({
  errorText: {
    paddingLeft: 15,
    color: theme.colors.textError,
  },
  textInput: {
    padding: 15,
    margin: 8,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={styles.textInput}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;