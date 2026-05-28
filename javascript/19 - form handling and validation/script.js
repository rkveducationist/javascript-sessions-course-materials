document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let isValid = true;

    // check previous errors
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // name validation
    if (name === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.innerText = "Invalid email format";
        isValid = false;
    }

    if (password === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMsg").innerText = "Form Submitted Sucessfully!";
        document.getElementById("successMsg").classList.add("success");
    } else {
        document.getElementById("successMsg").innerText = "Invalid Form Submission";
        document.getElementById("successMsg").classList.add("failure");
    }
});