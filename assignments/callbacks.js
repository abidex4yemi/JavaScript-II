// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
// print info
const print = item => console.log(item);

function getLength(arr, cb) {
	// getLength passes the length of the array into the callback.
	const totalItems = arr.length;
	cb(totalItems);
}

// Invoked
getLength(items, print);

function last(arr, cb) {
	// last passes the last item of the array into the callback.
	const lastItem = arr[items.length - 1];
	cb(lastItem);
}

// Invoked
last(items, print);

function sumNums(x, y, cb) {
	// sumNums adds two numbers (x, y) and passes the result to the callback.
	const sum = x + y;
	cb(sum);
}

// Invoked
sumNums(4, 10, print);

function multiplyNums(x, y, cb) {
	// multiplyNums multiplies two numbers and passes the result to the callback.
	const product = x * y;
	cb(product);
}

// Invoked
multiplyNums(10, 20, print);

function contains(item, list, cb) {
	// contains checks if an item is present inside of the given array/list.
	const itemExist = list.includes(item);

	// Pass true to the callback if it is, otherwise pass false.
	cb(itemExist);
}

// Invoked
contains('Pencil', items, print);

/* STRETCH PROBLEM */
const schoolBag = ['Pencil', 'Notebook', 'Pencil', 'yo-yo', 'Gum', 'Gum', 'Pencil'];

function removeDuplicates(array, cb) {
	// removeDuplicates removes all duplicate values from the given array.
	// Do not mutate the original array.
	const uniqueItem = Array.from(new Set(array));

	// Pass the duplicate free array to the callback function.
	cb(uniqueItem);
}

// Invoked
removeDuplicates(schoolBag, print);
