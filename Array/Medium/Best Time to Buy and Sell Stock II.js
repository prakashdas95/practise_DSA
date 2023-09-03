// www.youtube.com/watch?v=Q7v239y-Tik&ab_channel=AnujBhaiya

var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

maxProfit([7, 1, 5, 3, 6, 4]);
