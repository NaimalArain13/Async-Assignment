// Pratice assignments of Asynchronous JavaScript . Don't forget to post it on LinkedIn after completion.

// Question 1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World".

//this function takes time delay
function timedelay(delay: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
//create async function that takes time delay and return "Hello World"
async function printMessage(): Promise<string> {
  await timedelay(2000);
  return "Hello world";
}
//use IFFE to call this function only once.
(async () => {
  const message = await printMessage();
  console.log(message);
})();
// Question 2: Create a TypeScript function that takes a callback function as an argument and uses setTimeout to call the callback after 1 second.
function thisCallback(cb: () => void) {
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

let promise1: Promise<any> = new Promise((resolve) =>
  setTimeout(() => {
    console.log("resolved 1");
    resolve("Promise 1 resolved");
  }, 2000)
);
let promise2: Promise<any> = new Promise((resolve) =>
  setTimeout(() => {
    console.log("resolved 2");
    resolve("Promise 2 resolved");
  }, 2000)
);

async function waitFromPromise(): Promise<string[]> {
  let awaitPromise1 = await promise1;
  let awaitPromise2 = await promise2;
  return [awaitPromise1, awaitPromise2];
}
let func = waitFromPromise().then((res) => {
  console.log(res);
});
console.log(func); //[ 'Promise 1 resolved', 'Promise 2 resolved' ]

// Question 5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then logs the result to the console.

async function twoPromise1() {
  let promise1 = await new Promise((resolve, reject) => {
    resolve("item1");
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
twoPromise1();

// Question 6: Write a TypeScript function that uses async/await to wait for a Promise to reject and then logs the error to the console.

async function twoPromise2() {
  let promise1 = await new Promise((resolve, reject) => {
    reject("rejected");
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
twoPromise2();

// Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise that resolves with the square of the number after a delay of 1 second.
function squareNumber(num: number): Promise<number> {
  let promise: Promise<number> = new Promise((resolve, reject) => {
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

async function resolvedALL(arrayofPromises: Promise<any>[]): Promise<any> {
  let allPromise = await Promise.all(arrayofPromises);
  return allPromise;
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

async function myPromise(promise: Promise<number>): Promise<number> {
  let result = await promise;
  return result * 2;
}

const newPromise = new Promise<number>((resolve) =>
  setTimeout(() => {
    resolve(4);
  }, 1000)
);

let returnedPromise = myPromise(newPromise).then((res) => {
  console.log(res);
});
console.log(returnedPromise);
