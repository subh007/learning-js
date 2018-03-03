// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//   alert("please don't distrub")
// }

var myImage = document.querySelector('img');
var myText = document.querySelector('h1');

var myButton = document.querySelector('button');
myButton.onclick = function() {
  setUsername();
}

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/twitter-logo.png');
//       myText.textContent = "twitter is microblogging"
//     } else {
//       myImage.setAttribute ('src','images/firefox-icon.png');
//       myText.textContent = "firefox is browser"
//     }
// }

if (localStorage.getItem('name')) {
  var storedName = localStorage.getItem('name');
  myText.textContent = 'wecome back ' + storedName;
} else {
  setUsername();
}

function setUsername() {
  var myName = prompt('please enter your name');
  localStorage.setItem('name', myName);
  myText.textContent = "welcome to 0 to hero " + myName;
}
