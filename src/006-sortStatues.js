export function solution(statues) {
  let results = [];
  const lengthArray = statues.length;
  statues.sort((a, b) => a - b);

  if (lengthArray >= 1 && lengthArray <= 10) {
    const statuesMin = statues.reduce(
      (min, valorActual) => (valorActual < min ? valorActual : min),
      statues[0],
    );
    const statuesMax = statues.reduce(
      (max, valorActual) => (valorActual > max ? valorActual : max),
      statues[0],
    );
    console.log(statuesMin, statuesMax);

    if (
      Number.isInteger(statuesMin) &&
      Number.isInteger(statuesMax) &&
      statuesMin >= 0 &&
      statuesMin <= 20 &&
      statuesMax >= 0 &&
      statuesMax <= 20
    ) {
      console.log("valid input parameters");
      const numbersArray = Array.from(
        { length: statuesMax - statuesMin + 1 },
        (_, index) => index + statuesMin,
      );
      console.log(numbersArray);
      results = numbersArray.filter(
        (item) => !statues.includes(item),
      ).length;
      console.log(results)
    } else {
      console.log("Invalid input parameters");
      results = "Error: Invalid input parameters";
    }
    // for (let i = 0; i < statues.length; i++) {
    // }
  } else {
    console.log("length Array is gather than 10 or less than 1");
    results = "Error:length Array is gather than 10 or less than 1";
  }
  console.log(results);
  return results;
}
