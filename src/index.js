module.exports = function check(str, bracketsConfig) {
  console.log('str',str)

  let stack = []
  let bracketsMap = {}
  bracketsConfig.forEach(bracket => {
    // if(bracket[0] === bracket[1]){
    //   bracketsMap[bracket[1] + ' close'] = bracket[0] + ' open'
    // } else {
    //   bracketsMap[bracket[1]] = bracket[0]
    // }

    if(!bracketsMap[bracket[1]]){
      bracketsMap[bracket[1]] = bracket[0]
    }

  })
  // let [openBracket, closeBracket] = Object.entries(bracketsMap)
  // console.log('openBracket, closeBracket',openBracket, closeBracket)
  let closeBrackets = Object.keys(bracketsMap)
  let openBrackets = Object.values(bracketsMap)
  let equal = closeBrackets.filter(bracket => openBrackets.includes(bracket))
  console.log('equal',equal)
  console.log('openBrackets,closeBrackets',openBrackets,closeBrackets)
  let brackets = str.split('')
  console.log('stack',stack)
  console.log('bracketsMap',bracketsMap)
  console.log('bracketsConfig',bracketsConfig)
  

  // brackets.forEach(bracket => {
    for(let i = 0; i < str.length; i++){
      let current = str[i]
      console.log('bracket',current)
      console.log('iteration stack',stack)
      if(openBrackets.includes(current)){
        
        if(stack.includes(current) && equal.includes(current)){
          console.log('stack.includes(current) && equal.includes(current)',current, stack.includes(current) && equal.includes(current))
            stack.pop()
        }else {
          stack.push(current)
        }

        // stack.push(current)
      }else {
        console.log('else',current)
        if(stack.length === 0){
          console.log('stack.length === 0',stack.length === 0)
          return false
        }
  
        let last = stack[stack.length - 1]
  
        if(bracketsMap[current] === last ){
          stack.pop()
        }else {
          return false
        }
      }
    }
   
  // })

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

  // });
  console.log('stack after',stack)
  return stack.length === 0



//   let bracketMaps = {}
//   for(let i = 0;i < str.length; i++){
//     bracketsConfig.forEach(bracket => {
//       // if(bracketMaps[str[i]]){
//         // bracketMaps[str[i]] = 'closed'
//         if(str[i] === bracket[0]){
//           bracketMaps[bracket[0]] = 'opened'
//         // }
//       } else {
//         // bracketMaps[str[i]] = 'opened'
//         // if(str[i] === bracket[0]){
//           bracketMaps[bracket[0]] = 'closed'
//         // }
//       }
//     })

//   }
//   console.log('bracketMaps',bracketMaps)
//  let answer =   bracketsConfig.every( bracket => bracketsConfig[bracket[0]] === bracketsConfig[bracket[1]])
//  console.log('answer',answer)
//  return answer

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