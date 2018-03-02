// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//   alert("please don't distrub")
// }

var myImage = document.querySelector('img');
var myText = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/twitter-logo.png');
      myText.textContent = "twitter is microblogging"
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
      myText.textContent = "firefox is browser"
    }
}
