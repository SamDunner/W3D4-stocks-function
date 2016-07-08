function maxFunction(arr) {
  var minPrice = arr[0];
  var maxProfit = 0;
  for (i = 0; i < arr.length; i++) {
    var price = arr[i];
    if (price < minPrice) {
      minPrice = price;
    }
    if (maxProfit < price - minPrice) {
      maxProfit = (price - minPrice);
    }
  }
  console.log(maxProfit)
}



maxFunction([45, 24, 35, 31, 40, 38, 11])


// console.log(maxPrices([45, 24, 35, 31, 40, 38, 11]) === 16);
// console.log(maxPrices([11,15]) === 4);
// console.log(maxPrices([1,2,3]) === 2);
// console.log(maxPrices([1,3,2]) === 2);
// console.log(maxPrices([2,1,3]) === 2);
// console.log(maxPrices([2,3,1]) === 1);
// console.log(maxPrices([3,1,2]) === 1);
// console.log(maxPrices([3,2,1]) === -1);