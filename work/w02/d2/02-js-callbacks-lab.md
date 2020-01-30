![](https://i.imgur.com/Lx8fen4.png)

# JavaScript Callbacks Lab

## Introduction

This lab provides an opportunity to practice working with callbacks.

This lab is **not a deliverable**.


> **Note:** This can be a pair programming activity or done independently.

## Exercise

### Setup

1. Copy each of the exercises to a HTML,CSS,JS Repl
3. Code away!

### Exercises

```js
// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

function writeDing() {
  console.log('Ding!');
}

let timerId = setTimeout(writeDing(), 3000);
```

```js
// Exercise 2

// Javascript arrays have a built-in sort method that can take
// a callback to tell it how to compare the things you want to sort.

// Research the array sort method.

// Write the sorting callback as a named function declaration

// Write the callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

const sortedWords = words.sort(/* pass in a named callback here */);

// Check that logging sortedWords outputs
// ["nice", "short", "medium", "lengthy", "delicious"]
```

```js
// Exercise 3
//
// Change Exercise 2 so that:
//   1. The words sort longest to shortest
//   2. Use an anonymous inline function

const longWordsFirst = words.sort(/* write an anonymous inline function here */);

// Check that logging longWordsFirst outputs
// ["delicious", "lengthy", "medium", "short", "nice"]
```

```js
// Exercise 4

// Code a forEach method:
// 		1. Write a function named forEach.
//		2. The forEach function accepts two args, an array & a callback.
//		3. Code the forEach method such that it iterates over each element in the array arg (use a for loop).
//		4. For each iteration, invoke the callback arg, passing to it, the element and the index of the element.

// Test with this array
const colors = ['red', 'green', 'blue', 'purple'];
// and this callback
function log(elem, idx) {
  console.log(`Index: ${idx} / Element Value: ${elem}`);
}

// calling forEach(colors, log) should resulting in this output:
// Index: 0 / Element Value: red
// Index: 1 / Element Value: green
// Index: 2 / Element Value: blue
// Index: 3 / Element Value: purple
```

```js
// Exercise 5

// Let's pretend that we want to build a sandwich, but adding each
// ingredient is very cpu intensive, so we want to write each function
// that adds a certain ingredient to be written as an asynchronous
// function that, of course, accepts a callback that it will call after
// the ingredient has been added.

// The following are the completed functions to build a sandwich with:

function getBread(sandwich, cb) {
  setTimeout(function() {
    sandwich.push('bread');
    cb(sandwich);
  }, 1000);
}

function addMayo(sandwich, cb) {
  setTimeout(function() {
    sandwich.push('mayo');
    cb(sandwich);
  }, 900);
}

function addTurkey(sandwich, cb) {
  setTimeout(function() {
    sandwich.push('turkey');
    cb(sandwich);
  }, 800);
}

function addCheese(sandwich, cb) {
  setTimeout(function() {
    sandwich.push('cheese');
    cb(sandwich);
  }, 700);
}

// Variable to hold the sandwich's ingredients
const mySand = [];

// Assignment: Call the above functions so that logging mySand
// after "cheese" has been added
// produces these ingredients in the following order:
// ["bread", "mayo", "turkey", "cheese"]
// Hint: Remember those nested callbacks when calling the step1, step2...

```

### Bonus

Write function named `countdown` that accepts as an arg the starting number of seconds and console.logs the count down to zero one second apart from each other.

For example:

`countdown(3);`

console.logs something like the following:

```
Count: 3
Count: 2
Count: 1
Count: 0
```

### Solution Code

[This links to a CodePen containing the solution code](http://codepen.io/jim-clark/pen/yYbYBo?editors=001)