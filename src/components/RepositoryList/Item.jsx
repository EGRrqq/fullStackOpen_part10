import { StyleSheet, View, Image} from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.whiteColor,
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  textContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  languageText: {
    backgroundColor: theme.colors.blueColor,
    borderRadius: 5,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  roundNUm: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
})

const roundNum = (num) => {
  if (num >= 1000) {
    return `${Math.round((num / 1000) * 10) / 10}k`;
  }
  return num;
};

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.container} testID='repositoryItem'>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={{ marginBottom: 5 }}
            fontSize="subheading" 
            fontWeight="bold" 
          >
            {repo.fullName}
          </Text>
          <Text style={{ flexGrow: 1 }} color='textSecondary'>
            {repo.description}
          </Text>
          {repo.language ? (
            <View style={styles.languageContainer}>
              <Text color='colorWhite' style={styles.languageText}>{repo.language}</Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.roundNUm}>
          <Text style={{marginBottom: 5}} fontWeight='bold'>{roundNum(repo.stargazersCount)}</Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.roundNUm}>
          <Text style={{marginBottom: 5}} fontWeight='bold'>{roundNum(repo.forksCount)}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.roundNUm}>
          <Text style={{marginBottom: 5}} fontWeight='bold'>{roundNum(repo.reviewCount)}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.roundNUm}>
          <Text style={{marginBottom: 5}} fontWeight='bold'>{repo.ratingAverage}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>  
      </View>
    </View>
  );
};

export default RepositoryItem;