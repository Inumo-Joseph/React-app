// Task1: Create an array of fruits and add a new fruit to the end of the array using the push method.
 //let fruits = ['apple', 'banana', 'cherry'];
 //fruits.push('grapes');
//console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'orange']


// Task2: Remove the last fruit from the array and log the removed fruit.
//let fruits = ['apple', 'banana', 'cherry'];
//let removedFruit = fruits.pop();
//console.log("Removed Fruit: ", removedFruit); // Output: 'cherry'
//console.log(fruits); // Output: ['apple', 'banana']

// Task3: Remove the first fruit from the array and log the removed fruit.

//let fruits = ['apple', 'banana', 'cherry'];
//let removedFruit = fruits.shift()
//console.log("Removed Fruit: ", removedFruit); // Output: 'apple'
//console.log(fruits); // Output: ['banana', 'cherry']

// Task4: Add a new fruit to the beginning of the array.
//let fruits = ['banana', 'cherry'];
//fruits.unshift('kiwi')
//console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// Task5: Create an array of numbers and use the map method to create a new array with each number squared.
//let numbers = [1, 2, 3, 4];
//let squaredNumbers = numbers.map(num => num*num)
//console.log(squaredNumbers); // Output: [1, 4, 9, 16]

//Task6: Use the filter method to create a new array containing only the even numbers.
//let numbers = [1, 2, 3, 4, 5, 6];
//let evenNumbers = numbers.filter((num) => num%2==0)
//console.log(evenNumbers); // Output: [2, 4, 6]

// Task7: Use the find method to find the first number greater than 3.
//let numbers = [1, 2, 3, 4, 5];
//let number = numbers.find(num => num>3)
//console.log(number); // Output: 4

// Task8: Use the reduce method to sum all the numbers in the array.
//let numbers = [1, 2, 3, 4];
//let sum = numbers.reduce((start, num) => {return start +=num}) 
//console.log(sum); // Output: 10

// Task9: Check if the array of fruits includes 'banana'.
// let fruits = ['apple', 'banana', 'cherry']; 
// let hasBanana = fruits.includes('banana')
// console.log(hasBanana); // Output: true

// Task10: Join all the fruits in the array into a single string, separated by a comma.
//let fruits = ['apple', 'banana', 'cherry'];
//let fruitString = fruits.join(', ')
//console.log(fruitString); // Output: 'apple, banana, cherry'

// Task11: Create an array of numbers and add three more numbers to the end of the array.
//let numbers = [1, 2, 3];
//numbers.push(4,5,6);
//console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// Task12: Create an array of strings and add a new string to the end of the array. Then, log the new length of the array.
//let strings = ['hello', 'world'];
//let newLength = strings.push('javascript')
//console.log(newLength); // Output: 3
//console.log(strings); // Output: ['hello', 'world', '!']

// Task13: Create an array of numbers, remove the last element, and log both the removed element and the updated array.
//let numbers = [10, 20, 30];
//let removedNumber = numbers.pop()
//console.log(removedNumber); // Output: 30
//console.log(numbers); // Output: [10, 20]

// Task14: Create an array of colors, remove the last color, and log a message stating which color was removed.
//let colors = ['red', 'blue', 'green'];
//let removedColor = colors.pop()
//console.log(`Removed color: ${removedColor}`); // Output: 'Removed color: green'

// Task15: Create an array of city names, remove the first city, and log the updated array.
//let cities = ['New York', 'Los Angeles', 'Chicago'];
// cities.shift()
// console.log(cities); // Output: ['Los Angeles', 'Chicago']

// Task16: Create an array of numbers, remove the first number, and log both the removed number and the new array length.
//let numbers = [7, 8, 9];
//let removedNumber = numbers.shift()
//console.log(removedNumber); // Output: 7
//console.log(numbers.length); // Output: 2

// Task17: Create an array of animals and add a new animal to the beginning of the array. Then, log the updated array.
//let animals = ['dog', 'cat'];
//animals.unshift('elephant');
//console.log(animals); // Output: ['elephant', 'dog', 'cat']

// Task18: Create an array of numbers, add multiple numbers to the beginning, and log the new length of the array.
//let numbers = [3, 4, 5];
//let newLength = numbers.unshift(1,2)
//console.log(newLength); // Output: 5
//console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Task19: Create an array of names and use map to create a new array where each name is converted to uppercase.
// let names = ['Alice', 'Bob', 'Charlie'];
// let uppercasedNames = names.map(name => {return name.toUpperCase()})
// console.log(uppercasedNames); // Output: ['ALICE', 'BOB', 'CHARLIE']

// Task20: Create an array of numbers and use map to create a new array with each number multiplied by 10.
//let numbers = [1, 2, 3];
// let multipliedNumbers = numbers.map( num => {return num*10})
// console.log(multipliedNumbers); // Output: [10, 20, 30]

// Task21: Create an array of numbers and use filter to create a new array containing only the numbers greater than 5.
// let numbers = [3, 6, 8, 2, 7];
 //let filteredNumbers = numbers.filter( num  => {return num>5 })
//console.log(filteredNumbers); // Output: [6, 8, 7]

// Task22: Create an array of strings and use filter to create a new array containing only strings with a length greater than 3.
//let strings = ['cat', 'elephant', 'dog', 'lion'];
//let longStrings = strings.filter( string => {return string.length > 3})
//console.log(longStrings); // Output: ['elephant', 'lion']

// Task23: Create an array of numbers and use find to get the first number that is less than 0.
// let numbers = [4, -3, 2, -1];
// let negativeNumber = numbers.find( num => { return num<0})
// console.log(negativeNumber); // Output: -3

// Task24: Create an array of strings and use find to get the first string that starts with the letter 'L'.
//let strings = ['apple', 'banana', 'lemon', 'lime'];
//let stringWithL = strings.find( string => {return string.charAt(0)=='l'})
//console.log(stringWithL); // Output: 'lemon'

// Task25: Create an array of numbers and use reduce to find the product of all the numbers.
//let numbers = [1, 2, 3, 4];
// let product = numbers.reduce( (accumulator, num) => {  return accumulator*num })
//console.log(product); // Output: 24




// Task26: Create an array of strings and use reduce to concatenate all the strings into a single string.
//let strings = ['Hello', ' ', 'world', '!'];
// let concatenatedString = strings.reduce( (accumulate, string) => {  return accumulate.concat(string)})
// console.log(concatenatedString); // Output: 'Hello world!'

// Task27: Create an array of numbers and check if the number 5 is in the array.
//let numbers = [1, 2, 3, 4, 5]; 
// let hasFive = numbers.includes(5);
// console.log(hasFive); // Output: true

// Task28: Create an array of colors and check if the color 'purple' is in the array.
//let colors = ['red', 'green', 'blue'];
// let hasPurple = colors.includes("purple");
 //console.log(hasPurple); // Output: false

// Task29: Create an array of words and join them into a single sentence separated by spaces.
// let words = ['This', 'is', 'a', 'sentence'];
// let sentence = words.join(' ');
// console.log(sentence); // Output: 'This is a sentence'

// Task30: Create an array of numbers and join them into a single string separated by hyphens.
//let numbers = [1, 2, 3, 4];
//let numberString =numbers.join('-');
//console.log(numberString); // Output: '1-2-3-4'