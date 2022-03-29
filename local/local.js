//? when we want to set some item in local storage it must include a key and a value witch both will transformed
//? into strings in  devtool/application/localStorage 
// local storage real usage in my project : https://github.com/amirmahdimaleki/weather-app/blob/main/js/app.js

// ! localStorage  sessionStorage

localStorage.setItem('name', 'amirMahdi')
console.log(localStorage.getItem('name'))

// removing a single item that we want
localStorage.removeItem('name')

// removing the whole localStorage
localStorage.clear()


// Session storage methods are the same as local storage but the data will be removed by closing the tab

// we can change a keys value by just overwriting it :
// localStorage.setItem('name', 'Mike')


// ! cookies

//  the only way to interact coolies in document.cookie object for both setting and getting items

document.cookie = 'name = Amir; expires=' + new Date(2022, 0, 2).toUTCString()
//  the above code means that we are setting a cookie with the key of name and value of Amir
// and because cookies have various parameters and one of them is expiry date we should set it with utc that
//  the new Date's date means january(the 0 index) second 2022 

// ? if we just change the key and value we're not overwriting the cookie but adding a new one
document.cookie = 'lastName = Mlk; expires=' + new Date(9999, 0, 2).toUTCString() //=> this never expires ^_^
