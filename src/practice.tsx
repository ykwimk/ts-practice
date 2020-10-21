let count = 0; // 숫자
count += 1;
count = '문자열'; // type이 number이기 때문에 string은 에러

const message: string = 'hello world';

const done: boolean = true;

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['a', 'b', 'c']; // 문자열 배열

messages.push(1); // 문자열 배열에 숫자를 넣으려고 하면 에러

let mightBeUndefined: string | undefined = undefined; // string 이거나 undefined
let nullableNumber: number | null = null; // number 이거나 null

let color: 'red' | 'yellow' | 'blue' = 'red'; // red, yellow, blue 중에 하나
color = 'yellow';
color = 'green'; // red, yellow, blue 가 아닌 다른 건 에러