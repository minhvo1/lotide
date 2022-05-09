# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @minhvo199/lotide`

**Require it:**

`const _ = require('@minhvo199/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Writes a message whether the array assertion is true or false.
* `assertEqual(actual, expected)`: Writes a message whether the assertion is true or false.
* `assertObjectsEqual(actual, expected)`: Writes a message whether the object assertion is true or false.
* `countLetters(string)`: Take in a sentence (as a string) and then return a count of each of the letters in that sentence
* `countOnly(allItems, itemsToCount)`: Return counts for a specific subset of the items
* `eqArrays(array1, array2)`: Checks whether the two arrays are the same
* `eqObjects(object1, object2)`: Checks whether the two objects are the same
* `findKey(object, callback)`: Returns the key of the first element predicate returns truthy for instead of the element itself.
* `findKeyByValue(oject, value)`: Scan the object and return the first key which contains the given value.
* `head(array)`: Returns the first element of array.
* `tail(array)`: Returns all but the first element of array.
* `middle(array)`: Returns the middle element of array. If the array contains even elements, returns the two middle-most elements.
* `flatten(array)`: Returns array a single level deep.
* `letterPositions(string)`: Return all the indices (zero-based positions) in the string where each character is found.
* `map(array)`: Creates a new array populated with the results of calling a provided function on every element in the calling array.
* `takeUntil(array, callback)`: Creates a slice of array with elements taken from the beginning. Elements are taken until callback returns falsey
* `without(array, itemsToRemove)`: Return a subset of a given array, removing unwanted elements