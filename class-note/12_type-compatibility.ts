interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
}

var developer: Developer;
var person: Person;

// 타입 호환 오류 발생
// developer = person;

// 정상
// person = developer;


// 함수
var add = function(a: number):number {
    return a;
}
var sum = function(a: number, b: number):number {
    return a + b;
}

sum = add;
// add = sum; // 오류 발생


// 제네릭
interface Empty<T> {
    // ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;

//초기화
empty2 = {};

// 둘다 정상
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

// 초기화
notempty2 = { data : 1};

// 둘다 오류 발생
// notempty1 = notempty2;
// notempty2 = notempty1;