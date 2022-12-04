import { gql } from "@apollo/client";

export const LOAD_PROPERTIES = gql`
  query {
    propertyCollection(limit:6) {
      items {
        id
        title
        address
        category
        image {
          url
        }
      }
    }
  }
`;