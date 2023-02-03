import { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const [repository, setRepository] = useState();

  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network'
  });

  useEffect(() => {
    if(data) {
      console.log(data)
      setRepository(data.repository)
    }
  }, [data, loading, id])

  return {repository, loading, error};
}

export default useRepository;