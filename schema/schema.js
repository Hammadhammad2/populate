import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
  }
  type Mutation {
    UserResolver(newUser: UserInput): User
    ProfileResolver(newUser: profileInput): ProfileInfo
  }

  type User {
    firstname: String
    lastname: String
    email: String!
    password: String!
    pictureId: ID
    profileId: ID
  }
  type ProfileInfo {
    age: Int
    address: String
    gender: String
    education: String
    company: String
    website: String
  }

  input UserInput {
    firstname: String
    lastname: String
    email: String!
    password: String!
    pictureId: ID
    profileId: ID
  }

  input profileInput {
    _id: ID
    age: Int
    address: String
    gender: String
    education: String
    company: String
    website: String
  }
`;
export default typeDefs;
