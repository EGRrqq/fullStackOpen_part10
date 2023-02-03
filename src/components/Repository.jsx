import { View, StyleSheet, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryList/Item';
import theme from '../theme';
import Text from './Text';
import Review from './Review';

const styles = StyleSheet.create({
    languageText: {
        backgroundColor: theme.colors.blueColor,
        flexGrow: 0,
        textAlign: 'center',
        paddingVertical: 12,
    },
    container: {
      backgroundColor: theme.colors.backgroundMainColor,
      flexGrow: 1,
    },
    separator: {
      height: 10,
    },
})

const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  const reviews = repository
  ? repository.reviews.edges.map((edge) => edge.node)
  : [];

  const handlePress = () => {
    Linking.openURL(repository.url);
  };

  if (repository) {
    return (
      <FlatList
        style={styles.container}
        data={reviews}
        renderItem={({ item }) => <Review review={item} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}   
        ListHeaderComponent={() => (
          <View style={{ backgroundColor: theme.colors.white }}>
            <RepositoryItem repo={repository} />
            <Text onPress={handlePress} color='colorWhite' fontWeight='bold' style={styles.languageText}>
              Open in GitHub
            </Text>
          </View>
      )}
      />
    );
  }
};

export default Repository;