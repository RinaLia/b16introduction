const validate = {
  username: (string) => {
    return RegExp(/^[a-z]{5}/g).test(string);
  },
  password: (string) => {
    return RegExp(/[a-zA-Z\d]{8,}/g).test(string);
  },
};

// function validateUsername(username) {
//   const reg = /^[a-z]{5}/g;
//   const result = reg.test(username);
//   console.log(result);
// }
// // validateUsername("diandra");
// // validateUsername("Ebi");

// function validatePassword(password) {
//   const reg = /[a-zA-Z\d]{8,}/g;
//   const result = reg.test(password);
//   console.log(result);
// }
// // validatePassword("p@ssW0rd!");

module.exports = validate;
