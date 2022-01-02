// To replaces h1 text in index.html with 'Hello world! --> Browser reads code in order, <script> element at the end of body'
const myHeading = document.querySelector('h1'); 
myHeading.textContent = 'Hello world!';


// To create a simple text label which updates text with promt with dynamic behaviour
const input_username = document.querySelector('username');

input_username.addEventListener('click', updateName); // When item is clicked, updateName function is ran

function updateName() {
  let name = prompt('Enter your name');
  input_username.textContent = 'Your Name is: ' + name;
}

// Adding image changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/favicon.ico') {
      myImage.setAttribute('src','images/Winnie-the-Pooh-and-Friends.jpg');
    } else {
      myImage.setAttribute('src','images/favicon.ico');
    }
}
