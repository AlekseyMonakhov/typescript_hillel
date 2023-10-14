function isPalindrome(num: number): boolean {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

function findPalindrome(num: number, maxIterations = 1000): { result: number | null; steps: number } {
  let iterations = 0;
  while (iterations < maxIterations) {
    const reversedNum = parseInt(num.toString().split('').reverse().join(''), 10);
    const sum = num + reversedNum;
    iterations++;
    if (isPalindrome(sum)) {
      return {
        result: sum,
        steps: iterations,
      };
    }
    num = sum;
  }
  return {
    result: null,
    steps: iterations,
  };
}

const result = findPalindrome(196);
console.log(result);

function generatePermutations(array: number[]): number[][] {
  const result: number[][] = [];

  function permute(arr: number[], m: number[] = []): void {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  }

  permute(array);

  return result;
}

const inputArray: number[] = [1, 2, 3];
const permutations: number[][] = generatePermutations(inputArray);
console.log(permutations);
