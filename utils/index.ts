import { GraphQLClient } from "graphql-request";
// Graphql api client
const auth_token = "";
const gql_client = new GraphQLClient("edpoint_url", {
  headers: {
    Authorization: `Bearer ${auth_token}`,
  },
});

// Exporting modules
export { gql_client };
