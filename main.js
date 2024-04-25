"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Names = "Helooooooooooooooooooooooooooooooo";
console.log(Names);
//Question ; 01
let person_Name = "Eric";
console.log(`Hello ${person_Name}, would you like to learn some Python today`);
//Question ; 02
let My_Name = "Muhammad Qayyum-Ul-Haq";
//in lowercase
console.log("uppercase:", My_Name.toUpperCase());
//in uppercase
console.log("lowercase:", My_Name.toLowerCase());
//Question ; 03
let quote = "“A person who never made a mistake never tried anything new.”";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
//Question ; 04
let message = "A person who never made a mistake never tried anything new.";
let famousperson = "Albert Einstein";
console.log(`${famousperson} once said, "${message}"`);
//Question ; 05
let famousperson2 = "Albert Einstein";
let message2 = "A person who never made a mistake never tried anything new";
console.log('${famousperson2} once said, "${message2}"');
//Question ; 06
let person_name = "\t\n Muhammad Qayyum Ul Haq \n\t";
console.log("original:", person_name);
console.log("stripped:", person_name.trim());
//Question ; 07 & 08
let Number_Eight = " Write addition, subtraction, multiplication, and division operations that each result in the number 8";
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Question ; 09 & 10
// let favorite_Number="01";
// console.log(`favorite_Number is ${favorite_Number}`);
//Question ; 11
let Names_ = ["Aqif", "Qauuym ul Haq", "Mustafa", "Zohaib", "Ahsan", "Hurairah"];
console.log(Names_[0]);
console.log(Names_[1]);
console.log(Names_[2]);
console.log(Names_[3]);
console.log(Names_[4]);
console.log(Names_[5]);
//Question ; 12
let Names_Message = ["Aqif", "Qauuym Ul Haq", "Mustafa", "Zohaib", "Ahsan", "Hurairah"];
console.log(Names_[0], "Assalam o Walikum");
console.log(Names_[1], "Assalam o Walikum");
console.log(Names_[2], "Assalam o Walikum");
console.log(Names_[3], "Assalam o Walikum");
console.log(Names_[4], "Assalam o Walikum");
console.log(Names_[5], "Assalam o Walikum");
//Question ; 13
let Yourowner = ["Motorcycle", "Car", "Cycle", "Bike"];
console.log(`I Live to ride my ${Yourowner[0]}`);
console.log(`I Live to ride my ${Yourowner[1]}`);
console.log(`I Live to ride my ${Yourowner[2]}`);
console.log(`I Live to ride my ${Yourowner[3]}`);
// Question ; 14
//Define array of Guest
let Guestlist = ["Aqif", , "Mustafa", "Zohaib", "Ahsan", "Hurairah"];
//Invite each Guest for dinner
Guestlist.forEach(Guest => {
    console.log(`Dear ${Guest}, you are cordially invited to dinner`);
});
//map()
//invite Guest
let invitation = Guestlist.map(Guest => `Dear ${Guest}, you are cordially invited to dinner`);
console.log(invitation);
invitation.forEach(invitation => {
    console.log(invitation);
});
console.log(`Assalam o walikum ${Guestlist[0]} You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Guestlist[1]} You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Guestlist[2]} You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Guestlist[3]} You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Guestlist[4]} You are invited to dinner at my home`);
//Question ; 15
let Changing_Guestlist = ["Aqif", , "Mustafa", "Zohaib", "Ahsan", " Hurairah"];
//print the name who cant make dinner
let unableAttend = Changing_Guestlist.splice(5, 5)[0];
console.log(`${unableAttend} cant make dinner`);
//push
Changing_Guestlist.push("Muhammad Qayy-ul-Haque");
console.log(Changing_Guestlist);
//print a message
Changing_Guestlist.forEach(Guest => {
    console.log(`Dear ${Guest}, you are cordially invited`);
});
let cannotattend = ["Hurairah"];
console.log(`Assalam o walikum ${Changing_Guestlist[0]}You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Changing_Guestlist[1]} You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Changing_Guestlist[2]} You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Changing_Guestlist[3]} You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Changing_Guestlist[4]} You are invited to dinner at my home`);
console.log(`Assalam o Walikum ${Changing_Guestlist[4]} can't make it`);
//Question ; 16
let changing_Guestlist = ["Aqif", , "Mustafa", "Zohaib", "Ahsan", "Muhammad Qayyum-ul-Haque"];
console.log("Great News! we found a bigger table");
//unshift
Changing_Guestlist.unshift("Abeez");
//splice()
Changing_Guestlist.splice(Math.floor(Changing_Guestlist.length / 2.5), 0, "Farhan");
//push
Changing_Guestlist.push("Boss");
console.log(Changing_Guestlist);
//foreach
Changing_Guestlist.forEach(Guest => {
    console.log(`Dear ${Guest}, you all are cordially invited to dinner`);
});
// // Question ; 17
let ChangingGuestlist = ["Aqif", , "Mustafa", "Zohaib", "Ahsan", "Muhammad Qayyum-ul-Haque"];
// // print message
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 Guest");
Changing_Guestlist.unshift("alice", "bob");
//print message updated  list
console.log("updated list of Guest:", Changing_Guestlist);
// //remove Guest from the list
// while (Changing_Guestlist.length > 4 ){
//     let removedguest : string | undefined = Changing_Guestlist.pop();
//     if(removedguest!==undefined) {
//         console.log(`sorry , ${removedguest}, we cant invite you`);
// }
// };
//print a message to each of the three peoplestill on your list , letting them
Changing_Guestlist.forEach(guest => {
    console.log(`Dear ${guest} , you both are invited for the dinner `);
});
//splice
Changing_Guestlist.splice(0, Changing_Guestlist.length);
//print updatedempty list
console.log("updated list of guest:", Changing_Guestlist);
//Question ; 18
// Define the array of places
let placestovisit = [" Australia", "new york", "paris", " Canada", " Islands"];
//Print the array in its original order
console.log("Original order:", placestovisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\n Alphabetical order:", placestovisit.slice().sort());
// Show that the array is still in its original order
console.log("\n Array still in original order:", placestovisit);
//Print the array in reverse alphabetical order without changing the order of the original list
console.log("\n Reverse alphabetical order:", placestovisit.slice().sort());
// Show that the array is still in its original order
console.log("\n Array still in original order:", placestovisit);
// Reverse the order of the list
console.log("reverse order changed");
placestovisit.reverse();
console.log(placestovisit);
// Reverse the order of the list again
placestovisit.reverse();
console.log("\nReversed back to original order:", placestovisit);
// Sort the array in alphabetical order
placestovisit.sort();
console.log("\nSorted in alphabetical order:", placestovisit);
// Sort the array in reverse alphabetical order
placestovisit.sort();
console.log("\nSorted in reverse alphabetical order:", placestovisit);
// Question : 19
//Question ; 15
let Changingguestlist = ["Aqif", , "Mustafa", "Zohaib", "Ahsan", " Hurairah"];
//print the name who cant make dinner
let unableattend = Changing_Guestlist.splice(5, 5)[0];
console.log(`${unableAttend} cant make dinner`);
//push
Changing_Guestlist.push("Muhammad Qayy-ul-Haque");
console.log(Changing_Guestlist);
//print a message
Changing_Guestlist.forEach(Guest => {
    console.log(`Dear ${Guest}, you are cordially invited`);
});
let cannotAttend = ["Hurairah"];
console.log(`Assalam o walikum ${Changing_Guestlist[0]}You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Changing_Guestlist[1]} You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Changing_Guestlist[2]} You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Changing_Guestlist[3]} You are invited to dinner at my home`);
console.log(`Assalam o walikum ${Changing_Guestlist[4]} You are invited to dinner at my home`);
console.log(`Assalam o Walikum ${Changing_Guestlist[4]} can't make it`);
//Question ; 16
let changingGuestlist = ["Aqif", , "Mustafa", "Zohaib", "Ahsan", "Muhammad Qayyum-ul-Haque"];
console.log("Great News! we found a bigger table");
//unshift
Changing_Guestlist.unshift("Abeez");
//splice()
Changing_Guestlist.splice(Math.floor(Changing_Guestlist.length / 2.5), 0, "Farhan");
//push
Changing_Guestlist.push("Boss");
console.log(Changing_Guestlist);
//foreach
Changing_Guestlist.forEach(Guest => {
    console.log(`Dear ${Guest}, you all are cordially invited to dinner`);
});
// // Question ; 17
let Changing1guestlist = ["Aqif", , "Mustafa", "Zohaib", "Ahsan", "Muhammad Qayyum-ul-Haque"];
// // print message
console.log("unfortunately! the new dinner table wont arrive so we can invite only 2 Guest");
Changing_Guestlist.unshift("alice", "bob");
//print message updated  list
console.log("updated list of Guest:", Changing_Guestlist);
// //remove Guest from the list
// while (Changing_Guestlist.length > 4 ){
//     let removedguest : string | undefined = Changing_Guestlist.pop();
//     if(removedguest!==undefined) {
//         console.log(`sorry , ${removedguest}, we cant invite you`);
// }
// };
//print a message to each of the three peoplestill on your list , letting them
Changing_Guestlist.forEach(guest => {
    console.log(`Dear ${guest} , you both are invited for the dinner `);
});
//splice
Changing_Guestlist.splice(0, Changing_Guestlist.length);
//print updatedempty list
console.log("updated list of guest:", Changing_Guestlist);
// Question ; 20
// List of famous landmarks
let landmarks = [
    "Eiffel Tower",
    "Great Wall of China",
    "Taj Mahal",
    "Statue of Liberty",
    "Machu Picchu",
    "Pyramids of Giza",
    "Sydney Opera House",
    "Colosseum",
    "Golden Gate Bridge",
    "Petra"
];
// Print the list of landmarks
console.log("List of famous landmarks:", landmarks);
//Queation ; 21
// Define TypeScript objects for countries and their capital cities
let countriesandCapitals = {
    "France": "Paris",
    "China": "Beijing",
    "India": "New Delhi",
    "United States": "Washington D.C.",
    "Peru": "Lima",
    "Egypt": "Cairo",
    "Australia": "Canberra",
    "Italy": "Rome",
    "Japan": "Tokyo",
    "Brazil": "Brasília"
};
// Print the objects
console.log("Countries and their capital cities:", countriesandCapitals);
// Question ; 22
// Define a list of fruits
let fruits = ["apple", "banana", "orange", "grape", "watermelon"];
// Try to access the 6th item (index 5) which doesn't exist
console.log(fruits[5]); //Intentional index error
// Define a list of fruits
let Fruits = ["apple", "banana", "orange", "grape", "watermelon"];
// Corrected line to access the 5th item (index 4)
console.log(Fruits[4]); // This will print "watermelon"
// Question ; 23
let car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2
console.log("Is car == 'ford'? I predict False.");
console.log(car == 'ford');
// Test 3
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');
// Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 5
console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford');
// Test 6
console.log("Is car.length == 6? I predict False.");
console.log(car.length == 6);
// Test 7
console.log("Is car.length != 7? I predict True.");
console.log(car.length != 7);
// Test 8
console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');
// Test 9
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
// Test 10
console.log("Is car.includes('sub')? I predict True.");
console.log(car.includes('sub'));
// Question ; 24
let fruit = 'apple';
let number = 10;
let colors = ['red', 'green', 'blue'];
let animals = ['dog', 'cat', 'rabbit'];
// Tests for equality and inequality with strings
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');
// Tests using the lower case function
console.log("Is fruit.toLowerCase() == 'APPLE'? I predict True.");
console.log(fruit.toLowerCase() == 'apple');
// Numerical tests
console.log("Is number == 10? I predict True.");
console.log(number == 10);
console.log("Is number > 5? I predict True.");
console.log(number > 5);
console.log("Is number < 20? I predict True.");
console.log(number < 20);
console.log("Is number >= 10? I predict True.");
console.log(number >= 10);
console.log("Is number <= 10? I predict True.");
console.log(number <= 10);
// Tests using "and" and "or" operators
console.log("Is fruit == 'apple' and number == 10? I predict True.");
console.log(fruit == 'apple' && number == 10);
console.log("Is fruit == 'apple' or number == 20? I predict True.");
console.log(fruit == 'apple' || number == 20);
// Test whether an item is in an array
console.log("Is 'red' in colors? I predict True.");
console.log(colors.includes('red'));
// Test whether an item is not in an array
console.log("Is 'bird' not in animals? I predict True.");
console.log(!animals.includes('bird'));
// Question ; 25
let alien_color = 'green';
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
let aliencolor = 'yellow';
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
// Question ; 26
let Aliencolor = 'green';
if (Aliencolor == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
let AlienColor = 'red';
if (AlienColor == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// Question ; 27
let Aliencolors = 'yellow';
if (Aliencolors == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (Aliencolors == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (Aliencolors == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
let aliencolors = 'red';
if (aliencolors == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (aliencolors == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (aliencolors == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// Question ; 28
let age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question ; 29
// Define an array of favorite fruits
let favorite_fruits = ["apple", "banana", "mango"];
// Check if each fruit is in the array of favorite fruits
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}
// Question ; 30
// Define an array of usernames
let usernames = ["admin", "john", "mary", "emma", "peter"];
// Loop through the array and print greetings
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// Question ; 31
// Define an array of usernames
let user_names = ["admin", "john", "mary", "emma", "peter"];
// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (let user_name of user_names) {
        if (user_name === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user_name}, thank you for logging in again.`);
        }
    }
}
else {
    console.log("We need to find some users!");
}
// Remove all usernames from the array
user_names = [];
// Check if the list of users is not empty
if (user_names.length > 0) {
    // Loop through the array and print greetings
    for (let user_name of user_names) {
        if (user_name === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user_name}, thank you for logging in again.`);
        }
    }
}
else {
    console.log("We need to find some users!");
}
// Question ; 32
// List of current usernames
let current_users = ["john", "mary", "emma", "peter", "admin"];
// List of new usernames
let new_users = ["emma", "david", "sarah", "JOHN", "james"];
// Convert all usernames to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(username => username.toLowerCase());
// Loop through the new_users list
for (let new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let new_user_lower = new_user.toLowerCase();
    // Check if the new username is already in use
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
// Question ; 33
// Store the numbers 1 through 9 in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (let number of numbers) {
    // Use an if-else chain to print the proper ordinal ending for each number
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
// Question ; 34
// Store the names of three favorite pizzas in an array
let favorite_pizzas = ["Margherita", "Pepperoni", "BBQ Chicken"];
// Use a for loop to print the name of each pizza
for (let pizza of favorite_pizzas) {
    // Print a sentence using the name of the pizza
    console.log(`I like ${pizza} pizza.`);
}
// Additional line stating how much you like pizza
console.log("Pizza is one of my favorite foods! I really love pizza!");
// Question ; 35
// Store the names of three animals with a common characteristic in an array
let Animals = ["dog", "cat", "rabbit"];
// Use a for loop to print the name of each animal
for (let Animal of Animals) {
    // Print a statement about each animal
    console.log(`A ${Animal} would make a great pet.`);
}
// Print a statement about the common characteristic of these animals
console.log("Any of these animals would make a great pet!");
// Question ; 36
function makeShirt(size, message) {
    console.log(`A ${size}-sized shirt will be printed with the message: '${message}'.`);
}
// Call the function
makeShirt("medium", "Hello, World!");
// Question ; 37
function make_Shirt(message = "I love TypeScript", size = "large") {
    console.log(`A ${size}-sized shirt will be printed with the message: '${message}'.`);
}
// Making a large shirt with the default message
make_Shirt();
// Making a medium shirt with the default message
make_Shirt("medium");
// Making a shirt of any size with a different message
make_Shirt("Small but mighty!", "small");
// Question ; 38
function describe_city(city, country = 'Default Country') {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo");
// Question ; 39
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Test the function
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));
// Question ; 40
function make_album(artistName, albumTitle, numTracks) {
    let albumInfo = { artist: artistName, title: albumTitle };
    if (numTracks !== undefined) {
        albumInfo.tracks = numTracks;
    }
    return albumInfo;
}
// Make three objects representing different albums
const album1 = make_album('Taylor Swift', 'Fearless');
const album2 = make_album('Ed Sheeran', '÷ (Divide)');
const album3 = make_album('Adele', '21', 12);
// Print each album information
console.log(album1);
console.log(album2);
console.log(album3);
// Question ; 41
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Array of magician's names
const magician_names = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Calling the function to show magicians
show_magicians(magician_names);
// Question ; 42
function citycountry(city, country) {
    return `${city}, ${country}`;
}
// Test the function
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
const magicians2 = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
make_great(magicians2);
show_magicians(magicians2);
// Question ; 43
function makegreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians; // Make sure to return the modified array
}
const magicians3 = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
const greatMagicions2 = makegreat(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicions2);
// Question ; 44
function sandwich(...items) {
    console.log("sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(". ${items[i]}");
    }
}
console.log("enjoy your sandwich Asif");
console.log(". ${items['capsicum', 'tomato', 'chicken']}");
console.log(". ${items['beef', 'cheese']}");
console.log(". ${items['garlic chicken', 'mayo sauce']}");
function creatcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = creatcar("honda", "civic", { color: "black", year: "2024" });
console.log(mycar);
