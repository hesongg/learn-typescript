interface PersonInterface {
    name: string;
    age: number;
}

type PersonType = {
    name: string;
    age: number;
}

// interface 와 type을 사용했을 때 차이 -> 변수에 마우스 대서 프리뷰 봤을때 보여주는게 다름?
// 타입 별칭은 확장이 되지 않는다.
var seho: PersonType = {
    name: '세호',
    age: 30
}

type MyString = string;

var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean}
function getTodo(todo: Todo) {

}