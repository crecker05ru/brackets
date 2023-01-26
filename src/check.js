const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

const check = require('./index')

console.log('check1 true',check('|()|',config5))
console.log('check17 false',check('[]][[]',config2))
console.log('check13 false',check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6))
// it('should check if brackets sequence is correct 9', () => {
//   assert.equal(check('|()|', config5), true);
// });

// it('should check if brackets sequence is not correct 17', () => {
//   assert.equal(check('[]][[]', config2), false);
// });

// it('should check if brackets sequence is not correct 16', () => {
//   assert.equal(check('[]][[]', config3), false);
// });

// it('should check if brackets sequence is correct 13', () => {
//   assert.equal(check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6), false);
// });

// it('should check if brackets sequence is not correct 17', () => {
//   assert.equal(check('[]][[]', config2), false);
// });

// it('should check if brackets sequence is not correct 18', () => {
//   assert.equal(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7), false);
// });