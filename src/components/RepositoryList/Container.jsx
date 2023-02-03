import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './Item';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Link to={`/${item.id}`}>
          <RepositoryItem key={item.id} repo={item} />
        </Link>
      )}
    />
  );
};

export default RepositoryListContainer;