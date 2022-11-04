import { gql } from 'apollo-angular';

export const USER_CURRENT = gql`
  query {
    currentUser {
      id
      name
      wallets {
        id
        amount
        currency
      }
    }
  }
`;

export const WALLET_UPDATE = gql`
  subscription OnUpdateWallet {
    updateWallet {
      wallet {
        id
        amount
        name
      }
    }
  }
`;

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
