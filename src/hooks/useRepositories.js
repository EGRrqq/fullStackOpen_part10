import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const {data, loading, refetch} = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
    if (loading) {
      setIsLoading(true)
    }

    if (data) {
      setIsLoading(false)
      setRepositories(data.repositories)
    }
  }, [data, loading])

  return {repositories, isLoading, refetch};
}

export default useRepositories;