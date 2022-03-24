/* Simple Javascript Neural Network machine learing code. */
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var w = 0.5;
var b = 0.5;
var alpha = 0.01;
var epochs = 1000;
var m = x.length;
for (var i = 0; i < epochs; i++) {
  var sum_error = 0;
  for (var j = 0; j < m; j++) {
    var y_hat = x[j] * w + b;
    var error = y[j] - y_hat;
    sum_error += error * error;
    w = w + alpha * error * x[j];
    b = b + alpha * error;
  }
  console.log('Epoch ' + i + ': ' + sum_error);
  console.log('W = ' + ': ' + w);
  console.log('B = ' + ': ' + b);
  console.log('A = ' + 'B*'+ w + '+' + b);
 };
 const prompt = require('prompt-sync')();
 const B = prompt('Enter value ?');
 A=B*w+b
 console.log(`your prediction ${A}`);


