
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n-1);
}
console.log(factorial(5)); // 120


// with arrow function
const factorialArrow = (n) => {
  return (n === 0 ? 1 : n * factorialArrow(n - 1));
};
console.log(factorialArrow(5)); // 720  