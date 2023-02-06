import React, { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './Container';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT DESC');

  const vars = orderBy.split(' ');
  const variables ={
    OrderBy: vars[0],
    OrderDirection: vars[1]
  };

  const { repositories } = useRepositories(variables);

  return <RepositoryListContainer repositories={repositories} orderBy={orderBy} handleChange={setOrderBy} />;
};

export default RepositoryList;