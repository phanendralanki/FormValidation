const form = document.getElementById("form");

// console.log(form);

const uname = document.getElementById("uname");
// console.dir(uname); //To see the complete details

const email = document.getElementById("email");

const password = document.getElementById("password");

const cpassword = document.getElementById("cpassword");

const tandc = document.getElementById("tc");

var isValidName = false;
var isValidEmail = false;
var isValidPassword = false;
var isValidCPassword = false;
var isTCChecked = false;


// uname.addEventListener('keyup',checkUserName);

//To stop direct submiting and submitting after validation
form.addEventListener("submit", (e) => {
  // console.log(e);
  e.preventDefault(); //To stop the submission of form(it will slow down the process)
  validate();
});

//These values are the values that user submitted

function validate() {
  let nameValue = uname.value.trim(); //trim() is used to remove spaces(that are given by the user)
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let cpasswordValue = cpassword.value.trim();

  isValidName = false;
  isValidEmail = false;
  isValidPassword = false;
  isValidCPassword = false;
  isTCChecked = false;

  // let tandcValue = tandc.value

  // username check
//   if (nameValue === " ") {
//     setError(uname, "user name cannot be empty");
//   } else if (nameValue.length < 5) {
//     setError(uname, "user name should be minimum 5 characters");
//   } else {
//     setSuccess(uname);
//     //Setting true to the value
//     isValidName = true ;
//   }

    // ***username checking ***
    checkUserName(); 

  //setError function
  function setError(input, message) {
    let parent = input.parentElement; //we are getting the parent
    let small = parent.querySelector("small"); //we are getting the small tag
    small.innerText = message;
    parent.classList.add("error"); //error msg will be displayed to the error class
    parent.classList.remove("success");
  }

  //setSuccess function
  function setSuccess(input) {
    let parent = input.parentElement;
    parent.classList.add("success");
    parent.classList.remove("error");
  }

  //Email validation
  if (emailValue === "") {
    //if email value is empty
    setError(email, "Email cannot be empty");
  } else if (!emailCheck(emailValue)) {
    //!false = true
    setError(email, "Enter valid Email Id");
  } else {
    setSuccess(email);

     //Setting true to the value
    isValidEmail = true;
  }

  function emailCheck(input) {
    //input-emailValue
    let emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let valid = emailReg.test(input);
    // console.log(valid);
    return valid;
  }

  //password check
  //Password check

  if (passwordValue === "") {
    setError(password, "password cannot be empty");
  } else if (passwordValue.length < 8) {
    setError(password, "user name should be minimum 8 characters");
  } else {

     //Setting true to the value
    setSuccess(password);
    isValidPassword = true;
  }

  //Confirm Password check

  if (cpasswordValue === "") {
    setError(cpassword, "password cannot be empty");
  } else if (cpasswordValue !== passwordValue) {
    setError(cpassword, "passwords not matched");
  } 
  else {
    setSuccess(cpassword);
     //Setting true to the value
     isValidCPassword = true;
  }

  //Terms and conditions check

  if (!tandc.checked) {
    setError(tc, "click on agree terms checkbox");
  } 
  else {
    setSuccess(tc);
     //Setting true to the value
    isTCChecked = true;
  }

  if(isValidName && isValidEmail && isValidPassword && isValidCPassword && isTCChecked){
    // console.log("True")
    form.submit();
  } 

   // username checking
   function checkUserName(){
    if (nameValue === " ") {
            setError(uname, "user name cannot be empty");
          } else if (nameValue.length < 5) {
            setError(uname, "user name should be minimum 5 characters");
          } else {
            setSuccess(uname);
            //Setting true to the value 
            isValidName = true ;
          }
}
}

 

