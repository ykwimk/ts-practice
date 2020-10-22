"use strict";
var Circle = /** @class */ (function () {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시한다.
    /*
      radius: number;
      constructor(radius: number) {
        this.radius = radius;
      }
    */
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    /*
      width: number;
      height: number;
      constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
      }
    */
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(10, 5);
console.log(circle.radius); // public은 class 외부에서 조회 가능
//console.log(rectangle.width) // private는 class 외부에서 조회 불가능 (내부에서만 가능)
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: 'apple',
    age: 20
};
var expert = {
    name: '김개발',
    skills: ['react', 'typescript']
};
var people = [person, expert];
console.log(people);
var human = {
    name: '김사람'
};
var develop = {
    name: '김김',
    skills: ['javascript', 'vue']
};
var family = [human, develop];
var rainbow = 'red';
var rainbows = ['red', 'blue'];
console.log(family);
console.log(rainbows);
