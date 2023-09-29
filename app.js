//question 1
console.log("Question 1");
for(let i = 2; i <= 10; i += 2){
    console.log(i);
}

//question 2
console.log("Question 2");
for(let i = 5; i; i--){
    console.log(i);
}

//question 3
console.log("Question 3");
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const num of numbers){
    sum += num;
}
console.log(sum);

//question 4
console.log("Question 4");
const student = {name: "John", age: 20, grade: "A"};
for(const key in student){
    console.log(key);
}

//question 5
console.log("Question 5");
const book = {title: "Harry Potter", author: "J.K. Rowling", year: 1997};
for(const key in book){
    console.l
    
    console.log(book[key]);
}

//question 6
console.log("Question 6");
const colors = ["red", "green","blue","yellow"];
for(const color of colors){
    console.log(color);
}

//question 7
//see question 3

//question 8
console.log("Question 8");
const temperatures = [32, 68, 75, 82, 56];
const toCelsius = function(fahrenheit){console.log((fahrenheit - 32)*5/9)}
temperatures.forEach(toCelsius);

//question 9
console.log("Question 9");
const cities = ["New York", "Los Angeles", "Chicago", "Houston"];
const populations = {"New York": 8398748, "Los Angeles": 3990456, "Chicago": 2705994, "Houston": 2320268};
const printPop = (city) => console.log(populations[city]);
cities.forEach(printPop);

//question 10
console.log("Question 10");
let string = "";
for(i = 1; i <= 5; i++){
    string += "*";
    console.log(string);
}