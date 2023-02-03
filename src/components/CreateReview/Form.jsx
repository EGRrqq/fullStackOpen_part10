import { View, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from '../TextInput/Formik';
import Text from '../Text';
import theme from '../../theme';

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

const ReviewForm = ({ onSubmit, errors }) => {
  const buttonStyle = [
    styles.button,
    (errors.ownerName || errors.repositoryName || errors.rating) && {
      opacity: 0.5,
    },
  ];

  return (
    <View style={styles.container}>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeholder='Review' multiline={true} />
      <Pressable
        onPress={onSubmit}
        style={buttonStyle}
        disabled={errors.ownerName || errors.repositoryName || errors.rating}
      >
        <Text color='colorWhite' fontWeight='bold'>
          Add Review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;