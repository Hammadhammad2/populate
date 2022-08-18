import userResolver from "./userResolver.js";
import profileResolver from "./profileResolver.js";

const resolvers = {
  Mutation: {
    UserResolver: userResolver,
    ProfileResolver: profileResolver,
  },
};

export default resolvers;
