// Question 1
// Select the h3 element and change its value to Hello instead of Welcome.

const thirdHeading = document.querySelector("h3");
thirdHeading.innerHTML = "Hello"

// Question 2
// Select all the h4 elements on the page and change their margin-bottom style to -20px.

const fourthHeaders =document.querySelectorAll("h4");

for (let i = 0; i < fourthHeaders.length; i++){
    fourthHeaders[i].style.marginBottom = "-20px";
}

// Question 3
// Set the background colour of the second h4 element to red.

fourthHeaders[1].style.backgroundColor = "red";

// Question 4
// Set the font size of the first paragraph element on the page to 24px and its color to blue.

const firstPara = document.querySelectorAll("p");

firstPara[0].style.fontSize="24px";
firstPara[0].style.color="blue";

// Question 5
// Add span tags around the content of the third paragraph element on the page.

firstPara[2].innerHTML = `<span>${firstPara[2]}</span>`

