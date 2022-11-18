// function sum(a, b) {
//  return a + b;
// }

// sum(10, '20'); // 1020

// 밑에 부분 작성하면 ts 사용하는 것 처럼 타입 오류 체크 해줌
// @ts-check

/**
 * 
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 */
function sum(a, b) {
    return a + b;
}

// js에서 이런건 오류 체크 안해줌 
//  -> 위에 @ts-check 넣어서 오류 체크 가능
//  -> js에서 타입체크 하려니 번거롭다.. (ts 쓰면 편함)
// sum(10, '20'); 