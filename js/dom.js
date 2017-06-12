//var extraparagraph = document.getElementById("extra");
//
//console.log(extraparagraph);
//
///// access link tag within the paragraph
//var linktag = (extraparagraph.firstElementChild);
//
//console.log(linktag);
//
////access the content between the openning and closing 
//console.log(linktag.innerHTML);


//Task 1
//
//Access HTML element with id tag-line.
//Access all headings that belong to div with the class name bg-main-content.
//Create the variable collect and assign it with content of tag-line.
//Loop through the array of headings and append the content of each heading to variable collect
//After the loop, use alert to print collect

var tagline = document.getElementById("tag-line");
console.log("tagline: ", tagline);

var heading = document.querySelectorAll(".bg-main-content h2");
console.log("heading: ", heading);

var collect = tagline.innerHTML + "\n--------------------------\n";
console.log("collect: ", collect);

var i;

for (i = 0; i < heading.length; i += 1) {
    collect += heading[i].innerHTML + "\n";
    
};

alert(collect);
    

// Task 2
//
// Access 13th div with class name box that belongs to div with the class name bg-main-content. 
// You can name the variable when_to_launch.
// Use property children to "scoop" in array all HTML elements that belong to that div.
// Create the variable collect and assign it with content of heading that belongs to gotten array.
// Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
// After the loop, use alert to print collect

var when_to_launch = document.querySelectorAll(".bg-main-content .box");
console.log(when_to_launch[12]);

var content = when_to_launch[12].children;
console.log(content);

var collect = content[0].innerHTML + "\n--------------------------\n";
console.log(collect);

var i;

for (i = 1; i < content.length; i += 1) {
    collect += content[i].innerHTML + "\n\n";
    
};

alert(collect);

