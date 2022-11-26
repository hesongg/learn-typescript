interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}
var tony = introduce();

// 유니온타입이라 오류 발생 -> 유니온이라 두 인터페이스의 공통된 속성만 접근가능 (name)
// console.log(tony.skill); 

// 타입 단언으로 해결 -> 문제 해결은 가능하지만.. 코드가 지저분 하다 -> 타입 가드 사용으로 최적화 가능
if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill
    console.log(skill);
} else if((tony as Person).age) {
    var age = (tony as Person).age
    console.log(age);
}


// 타입 가드
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

// tony 가 Develop 이면 skill 에 바로 접근이 되고, 아니면 age 에 바로 접근이 된다.
if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}