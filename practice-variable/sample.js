// let nickname = "taro"
// console.log(nickname)
// nickname = "ichiro"
// console.log(nickname)

// var str = "webcamp"

// function foo(){
//   console.log(str)
//   var y = "hello"
// }

// foo()
// console.log(y)

// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello world"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// console.log(i)

/* 変数の巻き上げ */
var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()