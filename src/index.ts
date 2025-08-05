// https://leetcode.com/problems/promise-pool/description/

import promisePool from './problems/promisePool';

const caseFunctions = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200)),
];
const caseMaxParallell = 2;

const caseResult = await promisePool(caseFunctions, caseMaxParallell);
console.log(caseResult);

export default caseResult;

// 2 liner:
// async function promisePool(functions: F[], n: number): Promise<any> {
//   const evaluateNext = () => functions[n++]?.().then(evaluateNext);
//   return Promise.all(functions.slice(0, n).map(f => f().then(evaluateNext)));
// };
