"use strict";
var count = 0; // 숫자
count += 1;
count = '문자열'; // type이 number이기 때문에 string은 에러
var message = 'hello world';
var done = true;
var numbers = [1, 2, 3]; // 숫자 배열
var messages = ['a', 'b', 'c']; // 문자열 배열
messages.push(1); // 문자열 배열에 숫자를 넣으려고 하면 에러
var mightBeUndefined = undefined; // string 이거나 undefined
var nullableNumber = null; // number 이거나 null
var color = 'red'; // red, yellow, blue 중에 하나
color = 'yellow';
color = 'green'; // red, yellow, blue 가 아닌 다른 건 에러
