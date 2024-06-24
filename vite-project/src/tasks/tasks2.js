// LVL 1

// Task 1: Calculate Total Price of Products
// Objective: Use the reduce method to calculate the total price of all products in an array of objects.
// Array of product objects
// let products = [
// { name: 'Laptop', price: 1000 },
// { name: 'Phone', price: 500 },
// { name: 'Tablet', price: 300 } ];

// Calculate total price using reduce
// let totalPrice = products.reduce((price, product) => { return price +=(product.price)} ,0 ); // Output: Total Price: $1800

// Task 2: Count Number of Users by Age Group
// Objective: Use the reduce method to count the number of users in different age groups from an array of user objects.
// Array of user objects

//  let users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 },
//   { name: 'Charlie', age: 45 },
//   { name: 'Dave', age: 25 },
//   { name: 'Eve', age: 35 }
//  ];

// // Count users by age group using reduce
//  let ageGroups = users.reduce((accumulator, user) => {
  
//  // if a new age is spotted it sets the key of the accumulator obj to that age
//   if (!accumulator[user.age]) {
//       accumulator[user.age] = 1; // then sets the value to 1
//   }
  
//  else{accumulator[user.age]++; }//if the key is already part of the obj then it merelt increments the value

//  return accumulator

//  }, {});

//  console.log(ageGroups);  //Output: { '25': 2, '35': 2, '45': 1 }

// Task 3: Convert Array of Objects to Object
// Objective: Use the reduce method to convert an array of objects into a single object, where the keys are derived from a specific property of the objects.
// Array of user objects

  //  let users = [
  //    { id: 'u1', name: 'Alice' },
  //    { id: 'u2', name: 'Bob' },
  //    { id: 'u3', name: 'Charlie' }
  //  ];
  // // Convert array to object using reduce
  // let usersObject = users.reduce((accumulator, user)=> accumulator[user.id]= user.name, {})

  //  console.log(usersObject); // Output: { u1: 'Alice', u2: 'Bob', u3: 'Charlie' }


// Task 4: Calculate Average Age of Users
// Objective: Use the reduce method along with type conversion to calculate the average age of users in an array of objects.
// Array of user o b bjects
//   let users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'Dave', age: 40 }
//   ];

//  // Calculate total age and count of users using reduce

//  // an initial object is created with the fields we need
//   intialObj= { totalAge: 0, count: 0 };

//   let ageInfo = users.reduce((accumulator, user) => {

//     accumulator.totalAge += user.age;
//     accumulator.count++;
//     console.log(accumulator);

//     return accumulator;
//   }, intialObj);

//  // Calculate average age
//  let averageAge = ageInfo.totalAge /ageInfo.count;

//  console.log(`Average Age: ${averageAge}`); // Output: Average Age: 32.5

// LVL 2

// Task 1: Calculate the Balance of Each Account After Transactions
// Objective: Use the reduce method to calculate the final balance of each account after a series of transactions.
// Array of transaction objects

//  let transactions = [
//   { account: 'A', type: 'deposit', amount: 100 },
//   { account: 'B', type: 'withdrawal', amount: 50 },
//   { account: 'A', type: 'withdrawal', amount: 20 },
//   { account: 'C', type: 'deposit', amount: 200 },
//   { account: 'B', type: 'deposit', amount: 150 },
//   { account: 'C', type: 'withdrawal', amount: 100 }
//  ];
//  //Calculate the final balance for each account

//  const initial = {A:0, B:0, C:0}
 
//  let accountBalances = transactions.reduce((acc, transaction) => {
//   if (!acc[transaction.account]) {
//     acc[transaction.account] = 0;
//   }
//   if (transaction.type === 'deposit') {
//     acc[transaction.account] += transaction.amount;
//   } else if (transaction.type === 'withdrawal') {
//     acc[transaction.account] -= transaction.amount;
//   }


//   return acc;
// }, {});

//  console.log(accountBalances);
//  console.log('\n')

// Output: { A: 80, B: 100, C: 100 }

 //Task 2: Count Occurrences of Each Letter in a String
 //Objective: Use the reduce method to count the occurrences of each letter in a given string.
 //Given string
//  let str = 'hello world';
//  //Convert string to array of characters and count occurrences using reduce

//  let letterCount = str.split('').reduce((acc, char) => { 
//   if (char !== ' ') {
//      acc[char] = (acc[char] || 0) + 1; } 

  
//   return acc; }, {});

//  console.log(letterCount); // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

// Task 3: Convert Array of Objects to Object Grouped by Property
// Objective: Use the reduce method to convert an array of objects into a single object, where objects are grouped by a specific property.
// Array of user objects
// let users = [
//  { id: 'u1', name: 'Alice', group: 'admin' },
//  { id: 'u2', name: 'Bob', group: 'user' },
//  { id: 'u3', name: 'Charlie', group: 'admin' },
//   { id: 'u4', name: 'Dave', group: 'user' },
//  { id: 'u5', name: 'Eve', group: 'admin' }
// ];

// Group users by 'group' property using reduce
// let groupedUsers = users.reduce((accumulator, user) => {

//  if (!accumulator[user.group]) {
//   accumulator[user.group] = [];
// }

// accumulator[user.group].push(user);

// return accumulator;

// },{ })
// console.log(groupedUsers);
// Output:
// {
//   admin: [
//     { id: 'u1', name: 'Alice', group: 'admin' },
//     { id: 'u3', name: 'Charlie', group: 'admin' },
//     { id: 'u5', name: 'Eve', group: 'admin' }
//   ],
//   user: [
//     { id: 'u2', name: 'Bob', group: 'user' },
//     { id: 'u4', name: 'Dave', group: 'user' }
//   ]
// }

// Task 4: Calculate Total and Average Score of Students
// Objective: Use the reduce method to calculate the total score and average score from an array of student objects
// Array of student objects
//  let students = [
//    { name: "Alice", score: 85 },
//    { name: "Bob", score: 92 },
//    { name: "Charlie", score: 78 },
//    { name: "Dave", score: 88 },
//    { name: "Eve", score: 95 },
//  ];
//  //Calculate total and average score using reduce
//  const initalObj = {totalScore:0 , count:0}

//  let scoreInfo=students.reduce((accumulator, student ) =>{

//  accumulator.totalScore+=student.score
//   accumulator.count++;
//   return accumulator

//  }, initalObj)

//   let averageScore = scoreInfo.totalScore / scoreInfo.count;

//  console.log(`Total Score: ${scoreInfo.totalScore}`); // Output: Total Score: 438

//  console.log(`Average Score: ${averageScore}`); // Output: Average Score: 87.6

// LVL 3

// Task 1: Calculate Total Sales and Average Sales Price Per Product Category
// Objective: Use the reduce method to calculate the total sales and average sales price for each product category from an array of sales objects.

// Array of sales objects
//  let sales = [
//   { product: 'Laptop', category: 'Electronics', price: 1000, quantity: 2 },
//    { product: 'Phone', category: 'Electronics', price: 500, quantity: 3 },
//    { product: 'Tablet', category: 'Electronics', price: 300, quantity: 5 },
//    { product: 'Shirt', category: 'Apparel', price: 50, quantity: 10 },
//    { product: 'Shoes', category: 'Apparel', price: 80, quantity: 6 }
//  ];

// // Calculate total sales and average price per category
//  const initialObj = {
//   Electronics: { totalSales: 0, totalRevenue: 0, count: 0, averagePrice: 0 },
//   Apparel: { totalSales: 0, totalRevenue: 0, count: 0, averagePrice: 0 }
//  };

//   let calculatedResult= sales.reduce((accumulator, sale) => {
  
//    const category= sale.category
//    accumulator[category].totalSales+=sale.quantity
//   accumulator[category].totalRevenue+=sale.price*sale.quantity
//   accumulator[category].averagePrice= accumulator[category].totalRevenue / accumulator[category].totalSales
//    accumulator[category].count++;

//   return  accumulator

//   }, initialObj)

//  console.log(calculatedResult)

// Output:
// {
//   Electronics: { totalSales: 10, totalRevenue: 5300, count: 3, averagePrice: 530 },
//   Apparel: { totalSales: 16, totalRevenue: 980, count: 2, averagePrice: 61.25 }
// }

// LVL 4

// Task 1: Calculate Total Salary by Department and Find Highest Paid Employee
// Objective: Use the reduce method to calculate the total salary for each department and find the highest paid employee.
// Array of employee objects
//  let employees = [
//    { name: "Alice", department: "Engineering", salary: 90000 },
//    { name: "Bob", department: "HR", salary: 60000 },
//    { name: "Charlie", department: "Engineering", salary: 120000 },
//    { name: "Dave", department: "Sales", salary: 75000 },
//    { name: "Eve", department: "Sales", salary: 85000 },
//  ];

// // Task 2 Calculate total salary by department and find the highest paid employee using reduce
//  initialObj = { departments: {}, highestPaid: { salary: 0 } };

//  let salaryInfo = employees.reduce((accumulator, employee) => {
  
//    const departmentName = employee.department;

//    if (!accumulator.departments[departmentName]) 
//     {
//      accumulator.departments[departmentName] = 0;
//     }

//     accumulator.departments[departmentName] += employee.salary;

//      if (accumulator.highestPaid===null || employee.salary>accumulator.highestPaid.salary) {
//        accumulator.highestPaid = employee;
//      }
  
//    return accumulator;
//  }, initialObj);

//  console.log(salaryInfo.departments);
//  console.log(
//    `Highest Paid Employee: ${salaryInfo.highestPaid.name}, Salary: ${salaryInfo.highestPaid.salary}`
//  );

// HINT IN OUTPUT STRUCTURE REDUCE
// console.log(salaryInfo.departments);
// Output: { Engineering: 210000, HR: 60000, Sales: 160000 }
// console.log(`Highest Paid Employee: ${salaryInfo.highestPaid.name}, Salary: ${salaryInfo.highestPaid.salary}`);
// Output: Highest Paid Employee: Charlie, Salary: 120000

// Task 2: Flatten a Nested Array and Find Unique Values
// Objective: Use the reduce method to flatten a nested array and find all unique values in the array.
// Nested array
//  let nestedArray = [[1, 2, 3], [4, 5, 2], [3, 6, 7]];

// //HINT can use reduce in reduce
// // Flatten the array and find unique values using reduce

// let flatArray=nestedArray.reduce((accumulator, array)=>
//   {

//         accumulator=accumulator.concat(array);

//         return accumulator

//   },[])
//  const set = [new Set(flatArray)]
//  console.log(set)
//  console.log(Array.from(set))






