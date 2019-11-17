import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello: () => {
      return "Hello, my dude!";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default server.createHandler({ path: "/api/graphql" });
