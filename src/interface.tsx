// Shape라는 interface를 선언합니다.
interface Shape {
  getArea(): number;
  //Shape interface에는 getArea 라는 함수가 꼭 있어야 하며, 해당 함수의 반환 값은 숫자 이다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시한다.
  /*
    radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
  */
  constructor(public radius: number) {
    this.radius = radius
  }

  // 너비를 가져오는 함수
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  /*
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  */
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5)
const rectangle = new Rectangle(10, 5)

console.log(circle.radius) // public은 class 외부에서 조회 가능
//console.log(rectangle.width) // private는 class 외부에서 조회 불가능 (내부에서만 가능)

const shapes: Shape[] = [ new Circle(5), new Rectangle(10, 5) ];

shapes.forEach(shape => {
  console.log(shape.getArea());
})

/*
  일반 객체를 interface로 타입 설정
  --------------------------------------------------------------------------------------------------
*/

interface Person {
  name: string;
  age?: number; // 물음표가 들어 갔다는 것은 설정을 해도 되고 안해도 된다는 뜻
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: 'apple',
  age: 20
}

const expert: Developer = {
  name: '김개발',
  skills: ['react', 'typescript']
}

const people: Person[] = [person, expert]
console.log(people)

/*
  alias
  --------------------------------------------------------------------------------------------------
*/

type Human = {
  name: string;
  age?: number;
}

// & 는 Intersection으로 두개 이상의 타입들을 합쳐준다
type FrontEnd = Human & {
  skills: string[];
}

const human: Person = {
  name: '김사람'
}

const develop: FrontEnd = {
  name: '김김',
  skills: ['javascript', 'vue']
}

type Family = Human[] // Human[]을 이제 앞으로 People이라는 타입으로 사용할 수 있다
const family: Family = [human, develop];

type Rainbow = 'red' | 'orange' | 'blue';
const rainbow: Rainbow = 'red';
const rainbows: Rainbow[] = ['red' , 'blue']

console.log(family)
console.log(rainbows)