function logMessage(value: any) {
    console.log(value);
}

logMessage('hello');
logMessage(100);


//Union Type
var seho: string | number | boolean;
function logMessage_v2(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toUpperCase();
    }

    throw new TypeError('value must be string or number');
}

logMessage_v2('hello');
logMessage_v2(100);


//유니온 타입의 특징
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    // 유니온 타입 공통 필드만 접근 가능하다. 따로 접근하고 싶으면 위에 코드 처럼 처리해야 됨
    someone.name;   
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '펄', age: 100 });
askSomeone({ name: '이것도 가능?', age: 1000, skill: 'union' }); // 유니온 타입의 파라미터는 모든 타입의 속성들을 다 넘길 수 있다.


// 인터섹션 타입 - &
var capt: string & number & boolean;

function askSomeone_ex(someone: Developer & Person) {
    someone.name;
    someone.age;
    someone.skill;
}

askSomeone_ex({ name: '디벨로퍼', skill: '웹 개발', age: 100 });