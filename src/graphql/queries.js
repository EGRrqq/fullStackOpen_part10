import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query(
    $OrderBy:AllRepositoriesOrderBy!,
    $OrderDirection:OrderDirection!, 
    $SearchKeyword: String, 
    $First: Int,
    $After: String){
    repositories(orderBy:$OrderBy, orderDirection:$OrderDirection, searchKeyword:$SearchKeyword, first: $First, after: $After) {
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      url
      fullName
      language
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      description
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;