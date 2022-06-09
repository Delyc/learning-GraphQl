const { categories, products } = require('../db')

exports.Query = {
  hello: (parent, args, context) => {
    return "Hello world!";
  },
  products: (parent, args, context) => {
    return products;
  },
  product: (parent, args, context) => {
    const { id } = args;

    return products.find((product) => product.id === id);
  },
  categories: (parent, args, context) => categories,
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
  // numberOfAnimals: () => {
  //     return 55;
  // },
  // price: () => {
  //     return 1233.4233
  // },
  // isCool: () => {
  //     return false
  // },
  // iamArray: () => {
  //     return [1,2,3,4,5]
  // }
};
