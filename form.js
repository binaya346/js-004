
const usernameField = document.querySelector("#username");
const passwordField = document.querySelector("#password");
const passwordRetype = document.querySelector("#retype-password");
const email = document.querySelector("#email");
const button = document.querySelector("#submit")
const errorField = document.querySelector("#error")

const inputValues = {
    username: "",
    password: "",
    retypePassword: "",
    email: "",
    error: ""
}
// Rules
//  Username should be atleast 3 characters. 
//  Password should be atleast 6 characters
//  Retype password should match password. 
//  Email should contain @
//  Validation function should return true if validation is passed and should return false if validation is failed. 

const handleInput = (event) => {
    inputValues.error = "";
    const value = event.target.value;
    const name = event.target.name;

    inputValues[name] = value;
    console.log(inputValues)
}

const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValidated = handleValidation()
    if (isFormValidated) {
        alert("Form submitted");
        removeEventListner();
    } else {
        errorField.textContent = inputValues.error;
        errorField.style.color = "red"
    }
}

const handleValidation = () => {
    if (inputValues.username.length < 3) {
        inputValues.error = "Username should be atleast 3 characters. ";
        return false;
    }

    if (inputValues.password.length < 6) {
        inputValues.error = "Password should be atleast 6 characters";

        return false;
    }

    if (inputValues.password != inputValues.retypePassword) {
        inputValues.error = "Retype password should match password";
        return false;
    }

    if (!inputValues.email.includes("@")) {
        inputValues.error = "Email should contain @";
        return false;
    }

    return true;
}

const removeEventListner = () => {
    usernameField.removeEventListener(handleInput)
    passwordField.removeEventListener(handleInput)
    email.removeEventListener(handleInput)
    passwordRetype.removeEventListener(handleInput)
    button.removeEventListener(handleSubmit)
}

usernameField.addEventListener("input", handleInput)
passwordField.addEventListener("input", handleInput)
email.addEventListener("input", handleInput)
passwordRetype.addEventListener("input", handleInput)
button.addEventListener("click", handleSubmit)