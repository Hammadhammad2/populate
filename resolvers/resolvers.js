import userResolver from "./userResolver.js";
import profileResolver from "./profileResolver.js";
import getUserResolver from "./getuserResolver.js";

const resolvers = {
  Query: {
    getUser: getUserResolver,
  },
  Mutation: {
    addUser: userResolver,
    addProfileInfo: profileResolver,
  },
};

export default resolvers;
