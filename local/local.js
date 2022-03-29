//? when we want to set some item in local storage it must include a key and a value witch both will transformed
//? into strings in  devtool/application/localStorage 
// local storage real usage in my project : https://github.com/amirmahdimaleki/weather-app/blob/main/js/app.js

localStorage.setItem('name', 'amirMahdi')
console.log(localStorage.getItem('name'))