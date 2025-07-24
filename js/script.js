"use strict";

//  events part 1

const DivItems = document.querySelectorAll(".item");

function sayHello(userName) {
    console.log("Hello to site, ", userName); 
}

for ( let i = 0; i < DivItems.length; i++) {
    DivItems[i].addEventListener("dblclick", function(){
        sayHello("Abelrhman")
    })
}

document.addEventListener("mousemove", function(){
    console.log("Abdo");
})

const imageback = document.querySelector("img");
imageback.addEventListener("drag",function(){
    console.log("image moved....");
})

document.addEventListener("keydown", function(e){
    if(e.key == 'a') {
        console.log("button a clicked on keyboard")
    }
})

document.body.addEventListener("keydown", function(e){
    console.log(e);
    console.log(e.key);
})

document.addEventListener("contextmenu", function(e){
    console.log("right click disabled");
    e.preventDefault();
})

document.addEventListener("mousedown", function(){
    console.log("User clicked mouse down");
})

document.addEventListener("mouseup", function(){
    console.log("User left the mouse up");
})

document.addEventListener("click", function(){
    console.log("User clicked the mouse");
})

document.addEventListener("mouseenter", function(){
    console.log("the mouse has entered the place");
})

document.addEventListener("mouseleave", function(){
    console.log("the mouse has left the place");
})

document.addEventListener("keypress", function(){
    console.log("The user used the keyboard");
})

document.addEventListener("keyup", function(){
    console.log("The user left the keyboard button");
})

const input = document.querySelector(".input-name")

input.addEventListener("focus", function(){
    console.log("The user clicked inside the input field");
})

input.addEventListener("blur", function(){
    console.log("The user has left the input field");
})

const x = document.getElementById("button");
x.addEventListener("mouseover", myFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    console.log("Mouse is over the button");
}

function myThirdFunction() {
    console.log("Mouse is out of the button");
}


// Manipulation part 2

const container1 = document.createElement("div");
container1.setAttribute("class", "container");
container1.style.backgroundColor = "#f0f0f0";
container1.style.padding = "15px";
container1.style.margin = "10px";
container1.style.border = "1px solid #ccc";

const para1 = document.createElement("p");
para1.innerHTML = "<strong>This is the first container</strong>";
para1.style.color = "blue";

const textNode1 = document.createTextNode(" - new text added");
para1.appendChild(textNode1);

container1.appendChild(para1);

const container2 = document.createElement("div");
container2.setAttribute("class", "container");
container2.style.backgroundColor = "#e0ffe0";
container2.style.padding = "15px";
container2.style.margin = "10px";
container2.style.border = "1px solid #8bc34a";

const para2 = document.createElement("p");
para2.innerText = "This is the second container";
para2.style.color = "green";

const textNode2 = document.createTextNode(" - new text added");
para2.appendChild(textNode2);

container2.appendChild(para2);

document.body.appendChild(container1);
document.body.appendChild(container2);

const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div created using JavaScript.";
newDiv.style.border = "1px solid black";
newDiv.style.padding = "10px";

const textNode = document.createTextNode(" (Appended text node)");
newDiv.appendChild(textNode);

document.body.appendChild(newDiv);

const removeB = document.createElement("button");
removeB.textContent = "Click to remove the div";
removeB.style.marginTop = "10px";
document.body.appendChild(removeB);

removeB.addEventListener("click", function () {
  document.body.removeChild(newDiv);
});

newDiv.classList.add("highlight", "box");

const removeClassBtn = document.createElement("button");
removeClassBtn.textContent = "Remove Classes from Div";
removeClassBtn.style.marginTop = "10px";
document.body.appendChild(removeClassBtn);

removeClassBtn.addEventListener("click", function () {
  newDiv.classList.remove("highlight", "box");
});

let count = 0;
const maxCount = 5;
const counterBtn = document.createElement("button");
counterBtn.textContent = "Click to count";
counterBtn.style.marginTop = "10px";
document.body.appendChild(counterBtn);

counterBtn.addEventListener("click", function () {
  if (count < maxCount) {
    count++;
    console.log(`Count is now: ${count}`);
  } else {
    console.log("Max count reached.");
  }
});

function greetUser(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greetUser();
greetUser("Abdelrhman");

const product = "Laptop";
const price = 5999;
console.log(`The price of ${product} is ${price} EGP.`);

let laptops = ["Dell", "HP", "Lenovo", "Apple", "Asus"];
console.log(...laptops);
let numsold = [1, 2, 3, 4];
let numsnew = [5, 6, 7, 8, 9];
let nums = [0 , ...numsold , ...numsnew ,10];
console.log(nums);

function copyarray(...params) {
    let emptyEle = [];
    for ( let param of params) {
        emptyEle = param;
    }
    console.log(emptyEle);
}
copyarray(nums);

let user = {
    fname: "Abdelrhman",
    surname: "Mohamed",
    age: 22,
    location: "Fayoum",
    profession: "Engineer",
    sex: "Male",
    isActive: true,
    doWork: function() {
        console.log("He is solving problems...");
    },
    faculty: {
        name: "Faculty of Computers And AI",
        department: "Computer Science",
        location: "Fayoum University",
        dean: {
            name: "Dr. Mohamed",
            age: 58,
            sex: "Male"
        }
    }
};

// destruct 
let {fname:username, surname:userlname, age, sex} = user;
console.log(`User's name is ${username} ${userlname}, age is ${age}`);

// this 
this.alert("Hi Abdo, welcome to the site!");

let element = document.querySelector("h2")
element.addEventListener("click", function(){
    console.log(this);
})

// map filter find

let result = nums.map( (num) => num + 100 )
console.log(result);

let filtered = nums.filter( (num) => num > 5 )
console.log(filtered);

let found = nums.find( (num) => num === 5 )
console.log("number found",found);

let foundindex = nums.findIndex( (num) => num === 5 )
console.log(`index found for ${found}`,foundindex);