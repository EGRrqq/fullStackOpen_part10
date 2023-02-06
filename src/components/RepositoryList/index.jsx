import React, { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './Container';
import { useDebouncedCallback } from 'use-debounce';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT DESC');
  const [filter, setFilter] = useState('');

  const debounceText = useDebouncedCallback((value) => {
    setFilter(value);
  }, 500);

  const vars = orderBy.split(' ');
  const variables = {
    OrderBy: vars[0],
    OrderDirection: vars[1],
    SearchKeyword: filter,
  };

  const { repositories } = useRepositories(variables);

  return <RepositoryListContainer repositories={repositories} orderBy={orderBy} handleChange={setOrderBy} textFieldChange={debounceText} />;
};

export default RepositoryList;