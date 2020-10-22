function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2)

function sumArray(numbers: number[]):number {
  return numbers.reduce((acc, current) => acc + current, 0)
}

const total = sumArray([1, 4, 5])

function returnNothing(): void { // 함수에서 아무 것도 반환하지 않을 때는 void 사용
  console.log('return nothing!')
}