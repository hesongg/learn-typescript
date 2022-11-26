// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T
    title: string;
}
var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

// 타입 추론 기본 3
interface Dropdown_2<T> {
    value: T;
    title: string;
}
interface DetailedDropdown<K> extends Dropdown_2<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'test value',
    tag: 'new tag'
}


//Best Common Type - Union 으로 추론됨
var arr = [1, 2, true, true, 'a'];

