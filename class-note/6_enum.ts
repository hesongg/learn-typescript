//숫자형 enum
enum Shoes {
    Nike,
    Adidas,
    Sth
}

var myShoes = Shoes.Adidas;

console.log(myShoes); // 0

// 문자열 enum
enum NewShoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes2 = NewShoes.Adidas;

console.log(myShoes2);

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답');
    }
    if (answer === Answer.No) {
        console.log('오답');
    }
}

askQuestion(Answer.Yes);

// 이런 케이스의 문제 방지 가능
// askQuestion('y');
// askQuestion('예스');
// askQuestion('Yes');