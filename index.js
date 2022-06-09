const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const {categories, products, reviews } = require('./db')
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Product,
    Category,
  },
  context: {
      categories,
      products,
      reviews
  }
});
server.listen().then(({ url }) => {
  console.log("server running at", url);
});
