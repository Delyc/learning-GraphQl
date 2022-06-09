const {gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID): Category
    # numberOfAnimals: Int
    # price: Float
    # isCool: Boolean
    # iamArray: [Int]
  }

  type Product {
      id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
  }

  type Category {
      id: ID!
      name: String!
      products: [Product!]!

  }
`;


  