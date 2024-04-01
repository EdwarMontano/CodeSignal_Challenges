export function solution(param1, param2) {
  if (
    Number.isInteger(param1) &&
    Number.isInteger(param2) &&
    param1 >= -1000 &&
    param1 <= 1000 &&
    param2 >= -1000 &&
    param2 <= 1000
  ) {
    return param1 + param2;
  } else {
    // throw new Error("Invalid input parameters");
    return "Invalid input parameters";
  }
}

// const param1 = 1;
// const param2 = 2;
// const x = solution(param1, param2);
// console.log(x);
