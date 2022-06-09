const { reviews } = require("../db");

exports.Query = {
  hello: (parent, args, context) => {
    return "Hello world!";
  },
  products: (parent, {filter}, {products}) => {
      let filteredProducts = products
      if(filter){
          const {onSale, avgRating} = filter
          if(onSale){
              filteredProducts = filteredProducts.filter(product => {
                  return product.onSale
              })
          }
          if([1,2,3,4,5].includes(avgRating)){
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating =0
                    numberfReviews = 0
                    reviews.forEach((review) => {
                        if(review.productId === product.id){
                            sumRating += review.rating
                            numberfReviews++

                        } 
                        })
                        const avgProductRating = sumRating/ numberfReviews
                        console.log(avgProductRating, product.name)
                    return avgProductRating >= avgRating
                })
          }
      }
    return filteredProducts;
  },
  product: (parent, args, {products}) => {
    const { id } = args;

    return products.find((product) => product.id === id);
  },
  categories: (parent, args, {categories}) => categories,
  category: (parent, args, {categories}) => {
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
