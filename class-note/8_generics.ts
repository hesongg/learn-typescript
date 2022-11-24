// function logText(text) {
//     console.log(text);
//     return text;

//     logText(10);
//     logText('테스트');
//     logText(true);
// }


//유니온 한계
// function logTextUnion(text: string | number){
//     console.log(text);
//     return text;
// }
// const result = logTextUnion('test');
// result.split(''); // 오류 발생 -> string 으로 추론 안됨 (유니온의 한계)

//제네릭 예시
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

// logText<string>('test');
const str = logText('test');
str.split(''); // 사용 가능

const flag = logText(true);


//인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<number> = { value: 123, selected: true };


// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    return text;
}

logTextLength<string>('test'.split(''));


// 정의된 타입으로 타입을 제한하기
interface LengthType {
    length: number;
}

function logTextLength_extends<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

// logTextLength('a');
logTextLength([ 'a', 'b' ])


// keyof 로 제네릭 타입 제한
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('10');
getShoppingItemOption("name");
getShoppingItemOption("price");