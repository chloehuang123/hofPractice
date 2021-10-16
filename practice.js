// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count=0;
  _.each(numbers, function(num){
    if(num%5===0){
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var newArray=_.filter(fruits, function(fruit){
     return fruit==targetFruit;
  });
  return newArray;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var newArr=_.filter(fruits, function(fruit){
    return fruit[0]===letter;
  });
  return newArr;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookieType= _.filter(desserts, function(dessert){
    return dessert.type='cookie';
  });
  return cookieType;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var result=_.reduce(products, function(sum, curr){
    return sum + Number(curr.price.replace('$', ''));
  },0);
  return result;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

var typeCounts=_.reduce(desserts, function(counts, curr){
  if(counts[curr.type]===undefined){
    counts[curr.type]=1;
  }else{
    counts[curr.type]++;
  }
  return counts;
}, {})

return typeCounts;
};

//   var result={};

//   _.each(desserts, function(val, index){
//     if(result[val.type]===undefined){
// 		result[val.type]=1
// 	}else{
// 		result[val.type]++
// 	}
// });
//   return result;

/*
_.reduce = function(collection, iterator, accumulator) {
    // TIP: To support both arrays and objects, try re-using each() here
    var initial=arguments.length===2;
    _.each(collection, function(value){
      if(initial){
        initial=false;
        accumulator=value;
      }else{
        accumulator=iterator(accumulator, value);
      }
    })
    return accumulator;
  };
*/






// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var result=_.reduce(movies, function(arr, a){
    if(a.releaseYear>=1990 && a.releaseYear<=2000){
      return a.title;
    };
}, [])
  return result;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var isShorter=_.reduce(movies, function(bool, curr){
    return curr.runtime<timeLimit;
  },false);
  return isShorter;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

};
