import { Text, View } from 'react-native';

const RepositoryItem = ({ repo }) => {
  return (
    <View>
      <Text>{repo.fullName}</Text>
      <Text>{repo.description}</Text>
      <Text>Language: {repo.language}</Text>
      <Text>Stars: {repo.stargazersCount}</Text>
      <Text>Forks: {repo.forksCount}</Text>
      <Text>Reviews: {repo.reviewCount}</Text>
      <Text>Rating: {repo.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;