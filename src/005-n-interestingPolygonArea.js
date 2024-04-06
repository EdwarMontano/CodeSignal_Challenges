/**
 * Calculates the area of an n-interesting polygon.
 *
 * An n-interesting polygon is constructed by appending 1-interesting polygons (squares with a side length of 1)
 * to the rim of the (n-1)-interesting polygon, side by side. The 1-interesting polygon is a simple square with a side of length 1.
 * For example, a 2-interesting polygon has an area of 5, and a 3-interesting polygon has an area of 13.
 *
 * @example
 * // returns 5
 * solution(2);
 *
 * @example
 * // returns 13
 * solution(3);
 *
 * @param {number} n - The interesting level of the polygon, a positive integer, where 1 ≤ n < 10^4.
 * @return {number} - The area of the n-interesting polygon.
 *
 * @constraints
 * - Execution time limit: 4 seconds.
 * - Memory limit: 1GB.
 */
export function solution(n) {
  const tilesBlank = "O";
  const tilesGreen = "X";
  const sizeBoard = 2 * n + 1;
  let board = "";
  console.log("n:", n);
  if (n === 1) {
    board = "OOO\nOXO\nOOO";
  } else if (n === 2) {
    board = "OOOOO\nOOXOO\nOXXXO\nOOXOO\nOOOOO";
  } else if (n > 2 && n <= 10) {
    for (let i = 1; i <= sizeBoard / 2 + 1; i++) {
      // console.log(i);
      board =
        i === 1 || i === sizeBoard
          ? board.concat(`${tilesBlank.repeat(sizeBoard)}\n`)
          : i % 2 === 0
            ? board.concat(
                `${tilesBlank.repeat(sizeBoard - i - (n - 1))}${tilesGreen.repeat(i * 2 - 3)}${tilesBlank.repeat(sizeBoard - i - (n - 1))}\n`,
              )
            : board.concat(
                `${tilesBlank.repeat(sizeBoard - i - (n - 1))}${tilesGreen.repeat(i * 2 - 3)}${tilesBlank.repeat(sizeBoard - i - (n - 1))}\n`,
              );
    }

    const cadenaOriginal = board;
    const cadenaInvertida = invertirCadena(cadenaOriginal);
    const filas = cadenaInvertida.split("\n");
    // Paso 2: Eliminar la primeras 2fila
    filas.shift();
    filas.shift();
    // Paso 3: Unir nuevamente las filas en una cadena
    const nuevaCadena = filas.join("\n");
    board = board.concat(nuevaCadena);
  } else {
    return "Invalid input parameters";
  }
  const tiles = board.match(/x/gi);
  const area = tiles ? tiles.length : 0;

  board = board.replaceAll("X", "🟩");
  board = board.replaceAll("O", "⬜️");

  console.log("Area:", area);
  console.log(board);
  return area;
}

function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

export function solution2(n) {
  if (n === 1) {
    return 1;
  } else if (n >= 2 && n <= 10000) {
    let area = 0;
    const sizeBoard = 2 * n - 1;
    const half = Math.floor(sizeBoard / 2 + 1);
    for (let i = 1; i <= sizeBoard / 2 + 1; i++) {
      area += i === half ? i * 2 - 1 : 2 * (i * 2 - 1);
    }
    return area;
  } else {
    return "Invalid input parameters";
  }
}
