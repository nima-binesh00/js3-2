/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
function num(x, y) {
  return new Promise((resolve, reject) => {
    if (x < 0 || y < 0) {
      reject("negative");
      return 0;
    }
    setTimeout(() => {
      resolve(x + y);
    }, 1000);
  });
}
num(8, -1)
  .then((e) => {
    console.log(e);
  })
  .catch((j) => {
    console.log(j);
  });
