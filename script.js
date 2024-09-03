const createAccBtn = document.querySelector("#create_acc_btn")
const signInBtn = document.querySelector("#sign_in_btn")
const signInLabel = document.querySelector("#sign_in_label")
const registerInputs = document.querySelectorAll(".register")
const signInSec = document.querySelector("#sign_in_section")
const allInputs = document.querySelectorAll("input")
const tosCheckbox = document.querySelector("#tos_checkbox")
const form = document.querySelector("form")
const password = document.querySelector("#pw")
const confirmPassword = document.querySelector("#confirm_pw")
const entryElements = document.querySelectorAll(".entry")

var register = false;


createAccBtn.addEventListener('click',() => {

    event.preventDefault()


    if (!register) {
    signInLabel.textContent = "Create Account"
    createAccBtn.textContent = "Already have an Account? Sign In"
    signInBtn.textContent = "Register"
    signInSec.style.minHeight = "600px"
    signInSec.style.maxHeight = "1000px"
   //registerInputs.style.display = "block";
    registerInputs.forEach(input => {
        input.style.display = "block"
    });
    confirmPassword.addEventListener("input", matchPassword)
    confirmPassword.addEventListener("blur", matchPassword)
    register = true
    }
    else {
        signInLabel.textContent = "Sign in"
        createAccBtn.textContent = "create an account"
        signInBtn.textContent = "Sign in"
        signInSec.style.minHeight = "500px"
        signInSec.style.maxHeight = "450px"
        //registerInputs.style.display = "none";
        registerInputs.forEach(input => {
            input.style.display = "none"
        });
        register = false
    }
    allInputs.forEach(input => {
        input.value = ""
        input.checked = false
    })

})


  form.addEventListener ('submit', e => {
    if (!form.checkValidity() || !matchPassword()) {
        e.preventDefault()
    }
    form.classList.add("was-validated")
    matchPassword();
})  

/*
if(register) {
    confirmPassword.addEventListener("input", matchPassword)
    confirmPassword.addEventListener("blur", matchPassword)
}
    */


function matchPassword() {
    var isValid = confirmPassword.value == password.value
    confirmPassword.classList.toggle("is-invalid", !isValid)
    confirmPassword.classList.toggle("was-validated", isValid)
    confirmPassword.setCustomValidity(isValid ? "" : "Passwords do not match")
    return isValid
}



const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            }
            else {
                entry.target.classList.remove("show");
            }
        })  
    },
    {
        threshold: 0.5,
        rootMargin: "-20px",
    }
)

entryElements.forEach(entry => {
    observer.observe(entry)
});
