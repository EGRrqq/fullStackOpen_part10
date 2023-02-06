import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query($OrderBy:AllRepositoriesOrderBy!,$OrderDirection:OrderDirection! ){
    repositories(orderBy:$OrderBy, orderDirection:$OrderDirection) {
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