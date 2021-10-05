/* 変数 */
// let hello = 'Hello World';
// let int1 = 1;
// let int2 = -10;
// let float1 = 3.14;
// let str = 'JavaScriptを覚えよう';

// alert(hello); alert(int1); alert(int2); alert(float1); alert(str1);

/* 四則演算 */
// alert(4 + 3);
// alert(8 - 5);
// alert(2 * 6);
// alert(10 / 2);

/* 文字列の連結 */
// alert('Hello' + 'World');

let str1 = 'Hello';
let str2 = 'World!!';

alert(str1 + str2);

/* 条件分岐 */

let orange = 120;
let apple = 100;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
}else if(orange == apple){
  alert('みかんとりんごが同じ値段');
}else{
  alert('みかんの値段がりんごより高い');
}

/* 繰り返し */

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 3;
  count = count + 1;
}

alert('3を掛け続けて'+ max +'を超えるのに必要だった回数は'+ count +'回です');

let i;
let num1 = 0;

for(i = 1; i < 11; i++){
  num1 = num1 + i;
}

alert('1から10まで足し算した結果は'+ num1 +'です');