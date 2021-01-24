import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me {
        _id
        firstname
        lastname
        username
        email
        accounts {
          _id
          name
          balance
          transactions {
            _id
            name
            oldbalance
            newbalance
          }
        }
    }
  }
`;