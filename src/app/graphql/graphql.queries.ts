import { gql } from 'apollo-angular';

export const BOX_LIST = gql`
  query {
    boxes(free: false, purchasable: true, openable: true) {
      edges {
        node {
          id
          name
          iconUrl
          cost
        }
      }
    }
  }
`;

export const BOX_OPEN = gql`
  mutation OpenBox($input: OpenBoxInput!) {
    openBox(input: $input) {
      boxOpenings {
        id
        itemVariant {
          id
          name
          value
        }
      }
    }
  }
`;
