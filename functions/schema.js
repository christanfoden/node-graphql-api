const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => {
          return "world";
        }
      }
    }
  })
});
