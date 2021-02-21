// import World from './world'
//
// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// 型定義
// import {primitiveSample, notExistSample, anySample, unknownSample} from './basic';
//
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 関数型定義
// import {logMessage} from './function/basic'
// import {isUserSignedIn, isUserSignedIn2, sumProductsPrice} from './function/parameters'
//
// logMessage("Hello typescript")
// isUserSignedIn('ABC', "Junya")
// isUserSignedIn('DEF')
// isUserSignedIn2('ABC')
// isUserSignedIn2('DEF')
// const sum = sumProductsPrice(100, 200, 300, 400, 500)
// console.log('function parameters sample 5:', sum)

// オブジェクト型定義
// import objectSample from './object/object'
// import typeAliasSample from './object/alias'
//
// objectSample()
// typeAliasSample()

// 配列型定義
// import arraySample from './array/array'
// import tupleSample from './array/tuple'
//
// arraySample()
// tupleSample()

// ジェネリック型とポリモーフィズム
// import genericsBasicSample from './generics/basic'
// import genericsAdvancedSample from './generics/advanced'
//
// genericsBasicSample()
// genericsAdvancedSample()

// 非同期処理
import callbackSample from './asynchronous/callback'
import promiseSample from './asynchronous/promise'
import asyncAwaitSample from './asynchronous/asyncAwait'

// c allbackSample()
// promiseSample()
asyncAwaitSample()
