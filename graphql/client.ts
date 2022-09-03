import { GraphQLClient } from "graphql-request";

const requestHeaders = {
  authorization: "Bearer MY_TOKEN", // ????
};

const graphqlRequestClient = new GraphQLClient(
  "http://localhost:3000/api/graphql",
  { headers: requestHeaders }
);

export default graphqlRequestClient;
