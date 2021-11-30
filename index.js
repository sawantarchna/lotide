// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const main = require('./main');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const eqArrays  = require('./eqArrays');
const findKey  = require('./findKey');
const findKeyByValue   = require('./findKeyByValue');
const map   = require('./map');
const letterPositions   = require('./letterPositions');
const moduleCheck   = require('./moduleCheck');
const myjoin   = require('./myjoin');
const myModule   = require('./myModule');
const takeUntil   = require('./takeUntil');
const without   = require('./without');



module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  main: main,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  eqArrays: eqArrays,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  map: map,
  letterPositions: letterPositions,
  moduleCheck: moduleCheck,
  myjoin: myjoin,
  myModule: myModule,
  takeUntil: takeUntil,
  without : without,  
};