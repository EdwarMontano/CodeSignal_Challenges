function solution(param1, param2) {
    if ((param1 >= -1000) && (param1 <= 1000) && (param2 >= -1000) && (param2 <= 1000)) {
        return param1 + param2;
    }
}

param1 = -1001
param2 = 2

x = solution(param1, param2)
console.log(x)