import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
    mutation Mutation($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
        accessToken
        expiresAt
        }
    }
`;

export const REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;