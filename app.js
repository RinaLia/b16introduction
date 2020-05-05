const data = require("./src/identity");
const { username, password } = require("./src/validate");

//output for data
console.log(data);
//using for in
for (key in data) {
  console.log(data[key]);
}

//validate username
console.log("validate username: ", username("arka"));
//validate password
console.log("validate password: ", password("arkadem"));
