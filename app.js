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

// let str1 = 'Hello';
// let str2 = 'World!!';

// alert(str1 + str2);

// /* 条件分岐 */

// let orange = 120;
// let apple = 100;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// }else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// }else{
//   alert('みかんの値段がりんごより高い');
// }

// /* 繰り返し */

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 3;
//   count = count + 1;
// }

// alert('3を掛け続けて'+ max +'を超えるのに必要だった回数は'+ count +'回です');

// let i;
// let num1 = 0;

// for(i = 1; i < 11; i++){
//   num1 = num1 + i;
// }

// alert('1から10まで足し算した結果は'+ num1 +'です');

// /* 関数 */
// let alertString;
// alertString = addString("WebCamp");

// alert(alertString)

// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }

// let promptStr = prompt("何か好きな文字を入力してください。");

// alert(promptStr);

let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert("グー・チョキ・パーのいずれかを入力して下さい");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
}

let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if (user_hand != null){
alert('あなたの選んだ手は'+ user_hand +'です。\nJavaScriptの選んだ手は'+ js_hand +'です。\n結果は'+ judge +'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}