/*I'll put some functions in here for:
* login
* entering planets
* leaving planets
* closing game
* */

var loginButton = document.getElementsByClassName('login-button');
for(var i = 0; i < loginButton.length; i++){
   loginButton[i].addEventListener('click', handleLoginClick);
}

var planet = document.getElementsByClassName('planet-click');
for(var i = 0; i < planet.length; i++){
   planet[i].addEventListener('click', handlePlanetClick);
}

var homeButton = document.getElementsByClassName('home');
for(var i = 0; i < homeButton.length; i++){
   homeButton[i].addEventListener('click', handleHomeClick);
}

var logoutButton = document.getElementsByClassName('logout');
for(var i = 0; i < logoutButton.length; i++){
   logoutButton[i].addEventListener('click', handleLogoutClick);
}

function handleLoginClick(event){
   var username = document.getElementsByTagName("input")[0].value;
   console.log(username);
   location.replace("/index");
}

function handlePlanetClick(event){
   /*enter planet page*/
   var planetName = event.target.alt;
   location.replace("/" + planetName);
}

function handleHomeClick(event){
   /*add credits to user for collected bounties*/
}

function handleLogoutClick(event){
   /*block home button in nav bar*/
   /*store user data and user*/
}
