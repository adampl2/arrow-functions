/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

// Calculates average points in the results object.

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for (let i of arr) {
      if (subject in i.results) {
        allPoints += i.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);

// The spread operator.


let subjects = [...students[0].subjects];

const update = (item, val) => [...item, val];
let updatedSubjects = update(subjects, 'Electronics');
// Returns an array of 0th index with updated value
console.log(updatedSubjects);
// Returns the whole object of the 0th index, without updated value.
console.log(students[0]);

// Using Destructing on an array of objects.


const makeList = (arr, student) => {
    let list = [];
    for (let i in arr) {
        if (student === arr[i].name) {
            list = [...arr[i].subjects];
        }
    }
  return list;
  
};

let [ first, second, ...rest ] = makeList(students, 'John');
console.log(first, second, rest);

// Rest parameter

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

// Adds more letters the the mixedLetters variable.

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);

// Function to reverse letters

const updateSortReverse = (arr, ...letters) => {
    let newArray = [...arr, ...letters].sort().reverse();
    return newArray;
};

// Function call, reverses the moreMixedLetters variable and adds additional letters as a string value.

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
    console.log(reverseSort);




