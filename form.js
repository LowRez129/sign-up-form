const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");
const first_name = document.querySelector("#first-name");
const email = document.querySelector("#email");
const submit_button = document.querySelector("#submit-button");

submit_button.addEventListener("click", () => {
    console.log(password.value, confirm_password.value);

    switch (password.value) {
        case "":
            console.log("Empty");
            break;
        
        case confirm_password.value:
            console.log("Ok");
            break;
        
        default:
            console.log("Error");
    }
    
});
