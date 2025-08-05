/*

You are given a positive integer k. You are also given:

- a 2D integer array rowConditions of size n where rowConditions[i] = [above_i, below_i], and
- a 2D integer array colConditions of size m where colConditions[i] = [left_i, right_i].
The two arrays contain integers from 1 to k.

You have to build a k x k matrix that contains each of the numbers from 1 to k exactly once. The remaining cells should have the value 0.

The matrix should also satisfy the following conditions:

The number above_i should appear in a row that is strictly above the row at which the number below_i appears for all i from 0 to n - 1.
The number left_i should appear in a column that is strictly left of the column at which the number right_i appears for all i from 0 to m - 1.
Return any matrix that satisfies the conditions. If no answer exists, return an empty matrix.

 
Example 1:


Input: k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]
Output: [[3,0,0],[0,0,1],[0,2,0]]
Explanation: The diagram above shows a valid example of a matrix that satisfies all the conditions.
The row conditions are the following:
- Number 1 is in row 1, and number 2 is in row 2, so 1 is above 2 in the matrix.
- Number 3 is in row 0, and number 2 is in row 2, so 3 is above 2 in the matrix.
The column conditions are the following:
- Number 2 is in column 1, and number 1 is in column 2, so 2 is left of 1 in the matrix.
- Number 3 is in column 0, and number 2 is in column 1, so 3 is left of 2 in the matrix.
Note that there may be multiple correct answers.
Example 2:

Input: k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]
Output: []
Explanation: From the first two conditions, 3 has to be below 1 but the third conditions needs 3 to be above 1 to be satisfied.
No matrix can satisfy all the conditions, so we return the empty matrix.
 

Constraints:

2 <= k <= 400
1 <= rowConditions.length, colConditions.length <= 104
rowConditions[i].length == colConditions[i].length == 2
1 <= above_i, below_i, left_i, right_i <= k
above_i != below_i
left_i != right_i

*/

function topologicalSort(k: number, conditions: number[][]): number[] {
  const graph = new Map<number, number[]>();
  const indegree: number[] = new Array<number>(k + 1).fill(0);

  // Build graph and calculate indegree
  for (const [u, v] of conditions) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u)?.push(v);
    indegree[v]++;
  }

  const queue: number[] = [];
  const order: number[] = [];

  // Initialize the queue with nodes that have zero indegree
  for (let i = 1; i <= k; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  // Perform topological sort
  while (queue.length > 0) {
    const node = queue.shift();
    if (node !== undefined) {
      order.push(node);

      const neighbors = graph.get(node) ?? [];
      for (const neighbor of neighbors) {
        indegree[neighbor]--;
        if (indegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
  }

  // If order length is not equal to k, it means there's a cycle
  return order.length === k ? order : [];
}

export const buildMatrix = (
  k: number,
  rowConditions: number[][],
  colConditions: number[][],
): number[][] => {
  const rowOrder = topologicalSort(k, rowConditions);
  const colOrder = topologicalSort(k, colConditions);

  if (rowOrder.length === 0 || colOrder.length === 0) {
    return [];
  }

  const rowPosition = new Map<number, number>();
  const colPosition = new Map<number, number>();

  // Map numbers to their positions in row and column orders
  for (const [index, num] of rowOrder.entries()) rowPosition.set(num, index);
  for (const [index, num] of colOrder.entries()) colPosition.set(num, index);

  // Initialize the k x k matrix with zeros
  const matrix: number[][] = Array.from({ length: k }, () => new Array<number>(k).fill(0));

  // Place the numbers in the matrix according to the topological orders
  for (let num = 1; num <= k; num++) {
    const rowIdx = rowPosition.get(num);
    const colIdx = colPosition.get(num);
    if (rowIdx !== undefined && colIdx !== undefined) {
      matrix[rowIdx][colIdx] = num;
    }
  }

  return matrix;
};
