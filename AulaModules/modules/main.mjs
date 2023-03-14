"use strict";
import CalculatorName from "./functions.mjs";

import {
  sum as doSum,
  subtract as doSubtraction,
  multiply as doMultiplication,
  divide as doDivision,
} from "./functions.mjs";

console.log(`${CalculatorName}: 2 + 3 = ${doSum(2, 3)}`);
console.log(`${CalculatorName}: 2 - 3 = ${doSubtraction(2, 3)}`);
console.log(`${CalculatorName}: 2 * 3 = ${doMultiplication(2, 3)}`);
console.log(`${CalculatorName}: 2 / 3 = ${doDivision(2, 3)}`);
