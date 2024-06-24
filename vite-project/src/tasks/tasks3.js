// //  Simulate a delay function
function delay(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
 }

// //  TASK 1
//  // Async function to process an array of numbers with a delay
//  async function processNumbers(numbers) {

//    try {
//  //     Create an array of promises with a delay
//      let processingPromises = numbers.map(async num => {
//       await delay(num * 100);   //Simulate delay based on the number
//       return num * num;  //Return square of the number

//      });

//   //    TODO your code here ...
//      Promise.all(processingPromises).then((value) =>{
//        console.log(value)
//      })
//    } catch (error) {
//      console.error("Error processing numbers:", error);
//    }
//  }
// //  Array of numbers to process
//  let numbersTask1 = [1,2,3,4,5];

//  // Call the function to process numbers
//  processNumbers(numbersTask1);
//  // Output (after delays): 1, 4, 9, 16, 25

//  //TASK 2
// //  Task 2: Concurrently Calculate Factorials of Numbers
// //  Objective: Use for...of, Promise.all, and async/await to concurrently calculate the factorial of each number in an array.
//  //Async function to calculate factorials concurrently
//   async function calculateFactorials(numbers) {

//    console.log("calculating Factorial concurrently")
//    try {
// //      // creating an array of promises with delay
//       let promises=  numbers.map(async (num) => {
//         await delay(num*100)
//         return num*num

//       });

//       // use Promise.all to resolve them all
//       let results = await Promise.all(promises)

//       // Use for...of to log the results
//     for (let result of results) {
//       console.log(result);
//     }


//    } catch (error) {
//      console.error("Error calculating factorials:", error);
//    }
//  }

// //  // Array of numbers to calculate factorials
//   let numbersTask2 = [3, 4, 5, 6, 7];

//   // Call the function to calculate factorials
//   calculateFactorials(numbersTask2);
// //  // Output: 6, 24, 120, 720, 5040


// TASK 3 Parallel Processing of Strings with Delay
//    Objective: Use for...of, Promise.all, and async/await to process an array of strings in parallel, each with a simulated delay.

// Async function to process an array of strings with a delay
  // async function processStrings(strings) {

  //   try {

  //      let word = strings.map(  (string) => { 
  //       return new Promise( (resolve) => {
  //         resolve((string.toUpperCase())) //.toUpperCase used
  //      })} )
       
  //      let results = await Promise.all(word)
       
  //     console.log( setTimeout( async ()=> {console.log(results[0])}, 1000))
  //     for(let result of results){
  //       setTimeout( async ()=> {console.log(result)}, 1000)

  //     }

       
  //   } catch (error) {
  //     console.error("Error processing strings:", error);
  //   }

  // }

  // // Array of strings to process
  // let strings = ["apple", "banana", "cherry"];

  // //Call the function to process strings
  // processStrings(strings);
  
//Output (after delays): 'APPLE', 'BANANA', 'CHERRY'

//TASK 4
// // Task 2: Concurrently Compute Fibonacci Numbers
// // Objective: Use for...of, Promise.all, and async/await to concurrently compute Fibonacci numbers for each number in an array.


// async function computeFibonacci(numbers) {
//   try {
   
//     for (const num of numbers) {
//       let sum = [num];
//       sum.push(sum+=num)
//       console.log(sum)
     
//     }
//   } catch (error) {
//     console.error("Error computing Fibonacci numbers:", error);
//   }


// }

// // Array of numbers to compute Fibonacci numbers
// let numbersTask4 = [3,4,5,6,7]; 

// // Call the function to compute Fibonacci numbers
// computeFibonacci(numbersTask4);

// //TASK 5
// // Parallel Processing of Objects with Calculations
// //   Objective: Use for...of, Promise.all, and async/await to process an array of objects in parallel, performing calculations on each.
// // Async function to process an array of objects with a delay
// function delay(ms) {
 
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function processObjects(objects) {
//   let results =[];
//   try {
   
//    //procceses all promises concurrently
//     for (const obj of objects) {
//       //pushes each new promises to results array
//       results.push(new Promise((resolve) => {resolve(
//           obj.squared = obj.value*obj.value 
//       )}));
     
//       //after delay the each object is printed
     
//       await Promise.all( results)
//     } 

//     for(const obj of objects)
//       { 
//         setTimeout(() =>{console.log(obj)}, 1000)
//        } 
  
//   } catch (error) {
    
//     console.error("Error processing objects:", error);

//   }
// }

// // Array of objects to process
// let objectsTask5 = [
//   { name: "object1", value: 2 },
//   { name: "object2", value: 3 },
//   { name: "object3", value: 4 },

// ];


// //  Call the function to process objects
// processObjects(objectsTask5)


//  Output (after delays):
//  { name: 'object1', value: 2, squared: 4 }
//  { name: 'object2', value: 3, squared: 9 }
// { name: 'object3', value: 4, squared: 16 }

// //TASK 6
// // Parallel Data Transformation with Delay
// //  Objective: Use for...of, Promise.all, and async/await to transform an array of data in parallel, each transformation with a simulated delay.
// // Async function to transform data with a delay

// function delay(ms) {
 
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

//  async function transformData(data) {
//    try {
    
//     let result=[];
//       for( num of data)
//         {   
//             await delay(1000)
//             console.log(num*2)
//             result.push(new Promise((resolve) => { resolve( num*2) }))
//         }
 
//     await Promise.all(result)
  
        
//    } catch (error) {
//      console.error("Error transforming data:", error);
//    } 

   

//  }

// //  Array of data to transform
//  let dataTask6 = [1, 2, 3, 4, 5];

// //  Call the function to transform data
// transformData(dataTask6);
//  // Output (after delays): 2, 4, 6, 8, 10



// //TASK 7
// // Simulate Concurrent Data Fetching and Merging
// // Objective: Use for...of, Promise.all, and async/await to simulate fetching data concurrently from multiple sources and merging the results.

// // Async function to fetch data concurrently and merge results
//    async function fetchAndMergeData(sources) {
 
 
//      try {
//   //      Create an array of promises to fetch data
//        let fetchPromises = sources.map(async source => {
//          { 
//            await delay(source.delay)
//             return new Promise(resolve =>{ 
//                resolve(source);
//                console.log(source.data) //logs fetched data based on delay time
//              })
//          }
      
//        });
       
//  // Wait for all promises to resolve using Promise.all
//        let results = await Promise.all(fetchPromises); 

// //    //    Merge results using reduce
//        let mergedData = results.reduce((acc, data) => {
//          return {...acc,...data.data}
//        }, {});

//        console.log(mergedData);

//      } catch (error) {
//        console.error("Error fetching and merging data:", error);
//      }
//    }

// //  //  Array of data sources to fetch from
//   let sourcesTask7 = [
//     { delay: 200, data: { a: 1 } },
//     { delay: 100, data: { b: 2 } },
//     { delay: 300, data: { c: 3 } }
//   ];

// //  // Call the function to fetch and merge data
//   fetchAndMergeData(sourcesTask7);
// // // // Output (after delays): { a: 1, b: 2, c: 3 }
