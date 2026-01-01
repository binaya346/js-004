
const usernameField = document.querySelector("#name");
const passwordField = document.querySelector("#address");
// const passwordRetype = document.querySelector("#retype-password");
// const email = document.querySelector("#email");
const button = document.querySelector("#submit")
const errorField = document.querySelector("#error")

const inputValues = {
    name: "",
    address: "",
    // retypePassword: "",
    isActive: true,
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

// GET, POST, PUT, DELETE, OPTIONS, HEAD
// GET => Will use this when we need to pull data from BE. 
// POST => Will use this when we need to create new resource in BE.
// We can pass body in this request. We will pass data/payload using body. 
// PUT => Will use this when we need to update existing resource in BE.
// Can pass body.
// DELETE => Will use this to delete the resource from BE. 

// HTTP request
// Header | Body
// Meta information
// URL: api.speedrent.com/user/user_id
// API_HOST: api.speedrent.com
// ENDPOINT: /property


const uploadData = async () => {
    const { name, address, isActive } = inputValues;
    const url = "http://localhost:8080/publishers"
    const payload = { name, address, isActive }

    // Error handling
    try {
        // Code goes here..
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const output = await response.json() // Json parse
        if (!response.ok) {
            throw new Error("Something wrong with request");
        }
        alert("Successfully Uploaded data")

    } catch (error) {
        console.log("I grabbed the error " + error)
        inputValues.error = error
        errorField.textContent = inputValues.error;
        errorField.style.color = "red"
        // If unexpected error occurs while executing
        // the code inside try block, catch will catch that unexpected error. 
    }
}

// FE(convert json to string(stringify)) 
// => (network(String))=>
// BE(Convert string into json)

// BE(Convert json into string) 
// => (network(string))
// FE(Convert string into json) // Parse json

// Status code, req ko status
// 200-299 => Success. 
// 300-399 => Redirect. 
// 400-499 => Client side error. (FE le valid data pathahena. )
// 500-599 => Server side error. (Something wrong with backend. )

const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValidated = handleValidation()
    if (isFormValidated) {
        uploadData()
    } else {
        errorField.textContent = inputValues.error;
        errorField.style.color = "red"
    }
}

const handleValidation = () => {
    if (inputValues.name.length < 3) {
        inputValues.error = "Username should be atleast 3 characters. ";
        return false;
    }

    if (inputValues.address.length < 6) {
        inputValues.error = "address should be atleast 6 characters";

        return false;
    }

    // if (inputValues.password != inputValues.retypePassword) {
    //     inputValues.error = "Retype password should match password";
    //     return false;
    // }

    // if (!inputValues.email.includes("@")) {
    //     inputValues.error = "Email should contain @";
    //     return false;
    // }

    return true;
}

const removeEventListner = () => {
    usernameField.removeEventListener(handleInput)
    passwordField.removeEventListener(handleInput)
    // email.removeEventListener(handleInput)
    // passwordRetype.removeEventListener(handleInput)
    button.removeEventListener(handleSubmit)
}

usernameField.addEventListener("input", handleInput)
passwordField.addEventListener("input", handleInput)
// email.addEventListener("input", handleInput)
// passwordRetype.addEventListener("input", handleInput)
button.addEventListener("click", handleSubmit)