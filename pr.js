"use strict";
// Pratice assignments of Asynchronous JavaScript . Don't forget to post it on LinkedIn after completion.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World".
//this function takes time delay
function timedelay(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
//create async function that takes time delay and return "Hello World"
function printMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        yield timedelay(2000);
        return "Hello world";
    });
}
//use IFFE to call this function only once.
(() => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield printMessage();
    console.log(message);
}))();
// Question 2: Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second.
function thisCallback(cb) {
    setTimeout(() => {
        cb();
    }, 1000);
}
thisCallback(() => {
    console.log("I am a callback");
});
// Question 3: Write a TypeScript function that returns a Promise that resolves with the value "Resolved!" after 3 seconds.
function thisPromise() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved!");
        }, 3000);
    })
        .then((res) => {
        console.log(res);
    })
        .catch((err) => {
        console.log(err);
    });
}
thisPromise();
// Question 4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their results as an array.
let promise1 = new Promise((resolve) => setTimeout(() => {
    console.log("resolved 1");
    resolve("Promise 1 resolved");
}, 2000));
let promise2 = new Promise((resolve) => setTimeout(() => {
    console.log("resolved 2");
    resolve("Promise 2 resolved");
}, 2000));
function waitFromPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        let awaitPromise1 = yield promise1;
        let awaitPromise2 = yield promise2;
        return [awaitPromise1, awaitPromise2];
    });
}
let func = waitFromPromise().then((res) => {
    console.log(res);
});
console.log(func); //[ 'Promise 1 resolved', 'Promise 2 resolved' ]
// Question 5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then logs the result to the console.
function twoPromise1() {
    return __awaiter(this, void 0, void 0, function* () {
        let promise1 = yield new Promise((resolve, reject) => {
            resolve("item1");
        })
            .then((res) => {
            console.log(res);
        })
            .catch((err) => {
            console.log(err);
        });
    });
}
twoPromise1();
// Question 6: Write a TypeScript function that uses async/await to wait for a Promise to reject and then logs the error to the console.
function twoPromise2() {
    return __awaiter(this, void 0, void 0, function* () {
        let promise1 = yield new Promise((resolve, reject) => {
            reject("rejected");
        })
            .then((res) => {
            console.log(res);
        })
            .catch((err) => {
            console.log(err);
        });
    });
}
twoPromise2();
// Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise that resolves with the square of the number after a delay of 1 second.
function squareNumber(num) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num ** 2);
        }, 1000);
    });
    return promise;
}
let sqaured = squareNumber(2).then((res) => {
    console.log(res);
});
// console.log(sqaured);
// Question 8: Write a TypeScript function that uses async/await to wait for an array of Promises to resolve and then returns an array of their results.
function resolvedALL(arrayofPromises) {
    return __awaiter(this, void 0, void 0, function* () {
        let allPromise = yield Promise.all(arrayofPromises);
        return allPromise;
    });
}
let myPromise1 = Promise.resolve("resolves 1");
let myPromise2 = Promise.resolve("resolves 2");
let myPromise3 = Promise.resolve("resolves 3");
let myPromise4 = Promise.resolve("resolves 4");
let logPromise = resolvedALL([
    myPromise1,
    myPromise2,
    myPromise3,
    myPromise4,
]).then((res) => console.log(res));
console.log(logPromise); //[ 'resolves 1', 'resolves 2', 'resolves 3', 'resolves 4' ]
// Question 9: Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds.
function repeatTask() {
    function myRepeatedTask() {
        console.log("Hello world");
    }
    function callRepeat() {
        myRepeatedTask();
        setTimeout(callRepeat, 2000);
    }
    callRepeat();
}
repeatTask();
// Question 10: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2.
function myPromise(promise) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield promise;
        return result * 2;
    });
}
const newPromise = new Promise((resolve) => setTimeout(() => {
    resolve(4);
}, 1000));
let returnedPromise = myPromise(newPromise).then((res) => {
    console.log(res);
});
console.log(returnedPromise);
