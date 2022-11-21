interface User {
    age: number;
    name: string;
}


// 변수에 인터페이스 활용
// 인터페이스 타입이 정의되면 해당 변수는 인터페이스에 정의된 값을 필수로 정의해야 한다.
var seho: User = {
    age: 20,
    name: '세호'
}

// 함수의 인자를 정의하는 인터페이스
function getUser(user: User) {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 100
}

getUser(capt); 


// 함수 구조를 정의하는 인터페이스
interface SumFunction {
    (a: number, b: number): number
}

var sum: SumFunction;
sum = function(a:number, b: number): number {
    return a + b;
}


// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
// arr[0] = 10; // 오류 발생


// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// obj['cssFile'] = 'a'; // 오류 발생


// 인터페이스 확장(상속)
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

var captin: Developer = {
    name: 'cpt',
    age: 100,
    language: 'hi'
}