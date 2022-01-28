// Question 1
// Select the h3 element and change its value to Hello instead of Welcome.

const thirdHeading = document.querySelector("h3");
thirdHeading.innerHTML = "Hello";

// Question 2
// Select all the h4 elements on the page and change their margin-bottom style to -20px.

const fourthHeaders = document.querySelectorAll("h4");

for (let i = 0; i < fourthHeaders.length; i++) {
  fourthHeaders[i].style.marginBottom = "-20px";
}

// Question 3
// Set the background colour of the second h4 element to red.

fourthHeaders[1].style.backgroundColor = "red";

// Question 4
// Set the font size of the first paragraph element on the page to 24px and its color to blue.

const firstPara = document.querySelectorAll("p");

firstPara[0].style.fontSize = "24px";
firstPara[0].style.color = "blue";

// Question 5
// Add span tags around the content of the third paragraph element on the page.
const thirdPara = document.querySelector("p.three");
thirdPara.innerHTML = `<span>${thirdPara.innerHTML}</span>`;

// Question 6
// Add a new paragraph to the div with a class of content. Add the paragraph after the others.

const newPara = document.querySelector(".content");
newPara.innerHTML += `<p>New Paragraph</p>`;

// Question 7
// Add a new class called content-item to each paragraph in the div with a class of content.
// element.classList.add("my-class");

newPara.classList.add("content-item");

// Question 8
// Select the ul element on the page by its id and add a new list item to the beginning of the list.

const list = document.getElementById("services");
list.innerHTML = `<li>New Item</li> ${list.innerHTML}`;

// Question 9
// Programmatically remove the class from the ul element.

list.classList.remove("service-list");

// Question 10
// Hide the element with the id of hide.
// document.getElementById("id-of-element").style.display = ""; 

const hideObj = document.querySelector("#hide").style.display= "none";

