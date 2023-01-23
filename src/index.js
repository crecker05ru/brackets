module.exports = function check(str, bracketsConfig) {
  // console.log('str',str)

  // let stack = []
  // let bracketsMap = {}
  // bracketsConfig.forEach(bracket => {
  //   if(!bracketsMap[bracket[0]]){
  //     bracketsMap[bracket[0]] = bracket[1]
  //   }
  // })
  // let brackets = str.split('')
  // console.log('stack',stack)
  // console.log('bracketsMap',bracketsMap)
  // console.log('bracketsConfig',bracketsConfig)
  // let last = stack[stack.length - 1]
  // brackets.forEach(bracket => {
  //   // bracketsConfig.forEach(config => {
  //     console.log('bracket',bracket)
  //     for(let key in bracketsMap){
  //       console.log('key',key)
  //       console.log('bracket',bracket)
  //       if(bracket === key){
  //         stack.push(bracket)
  //       }else{
  //         if(stack.length === 0)
  //         return false
  //       }

  //       if(key === last){
  //         stack.pop()
  //       }else {
  //         return false
  //       }
  //     }
  //   })

  // // });
  // console.log('stack after',stack)
  // return stack.length === 0



  let bracketMaps = {}
  for(let i = 0;i < str.length; i++){
    bracketsConfig.forEach(bracket => {
      // if(bracketMaps[str[i]]){
        // bracketMaps[str[i]] = 'closed'
        if(str[i] === bracket[0]){
          bracketMaps[bracket[0]] = 'opened'
        // }
      } else {
        // bracketMaps[str[i]] = 'opened'
        // if(str[i] === bracket[0]){
          bracketMaps[bracket[0]] = 'closed'
        // }
      }
    })

  }
  console.log('bracketMaps',bracketMaps)
 let answer =   bracketsConfig.every( bracket => bracketsConfig[bracket[0]] === bracketsConfig[bracket[1]])
 console.log('answer',answer)
 return answer
}


// str |(|) - открывем скобки и ждем такую закрывающую или другую открывающую иначе false ,
//false - если следует закрывающая после такой же закрывающей если до нее небыло пары 
// bracketsConfig [ [ '(', ')' ], [ '|', '|' ] ]
// bracketMaps { '|': 0, '(': 1, ')': 1 }
// answer true
//   4) should check if brackets sequence is not correct 10

// str ())(
//   bracketsConfig [ [ '(', ')' ] ]
//   bracketMaps { '(': 2, ')': 2 }
//   answer true
//     1) should check if brackets sequence is not correct 3