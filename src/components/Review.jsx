import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.whiteColor,
    padding: 15,
  },
  rating: {
    marginRight: 15,
  },
});

const Review = ({ review }) => {
  const year = review.createdAt.substring(0, 4);
  const month = review.createdAt.substring(5, 7);
  const day = review.createdAt.substring(8, 10);

  return (
    <View style={styles.container}>
      <Text
        color='primary'
        fontWeight='bold'
        fontSize='subheading'
        style={styles.rating}
      >
        {review.rating}
      </Text>
      <View style={{ flexShrink: 1 }}>
        <Text fontWeight='bold'>{review.user.username}</Text>
        <Text color='textSecondary' style={{ marginBottom: 5 }}>
          {format(
            new Date(Number(year), Number(month) - 1, Number(day)),
            'MM/dd/yyyy'
          )}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default Review;