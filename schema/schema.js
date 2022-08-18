import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    getUser(userID: String): UserInfo
  }

  type Mutation {
    addUser(newUser: UserInput): User
    addProfileInfo(newUser: profileInput): ProfileInfo
  }

  type User {
    firstname: String
    lastname: String
    email: String!
    password: String!
    pictureId: String
    profileId: String
  }

  type UserInfo {
    firstname: String
    lastname: String
    email: String!
    password: String!
    profileId: ProfileInfo
    pictureId: ImageInfo
  }
  type ImageInfo {
    id: ID
    image: String
  }
  type ProfileInfo {
    userId: ID
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
    profileId: String
    pictureId: String
  }

  input profileInput {
    userId: String
    age: Int
    address: String
    gender: String
    education: String
    company: String
    website: String
  }
`;
export default typeDefs;
