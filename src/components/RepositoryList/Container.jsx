import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './Item';
import { Link } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, handleChange, orderBy, textFieldChange, onEndReach }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View>
      <Searchbar onChangeText={textFieldChange} />
      <Picker selectedValue={orderBy}
        onValueChange={(itemValue) => handleChange(itemValue)}>
        <Picker.Item label="Latest repositories" value="CREATED_AT DESC" />
        <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE DESC" />
        <Picker.Item label="Lowest rated repositories" value="RATING_AVERAGE ASC" />
      </Picker>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
        <Link to={`/${item.id}`}>
          <RepositoryItem repo={item} isSingle={false} />
        </Link>
        )}
      />
    </View>
  );
};

export default RepositoryListContainer;