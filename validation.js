let form = document.getElementById('form');
const full = document.getElementById('full');
const address = document.getElementById('address');
const number = document.getElementById('number');
const email = document.getElementById('email');
const popup = document.getElementById('popup');
const cSlide = document.getElementById('cSlide');

form.addEventListener("submit", (e) => {
    e.preventDefault();
   
    verifyInputs();
});
// form.addEventListener("submit", () => {
//     closeSlide()});
function verifyInputs() {
    const fullValue = full.value.trim();
    const addressValue = address.value.trim();
    const numberValue = number.value.trim();
    const emailValue = email.value.trim();

    if (fullValue === '') {
        accessDenied(full, "Insert your Full Name!!!");
    } else if (fullValue.length < 5){
        accessDenied(full, "More than 5 characters needed!!!");
    } else {
        permissionGranted(full);
    }
    
    if (addressValue === ''){
        accessDenied(address, "Insert your Residential Address!!!");
    } else {
        permissionGranted(address);
    }

    if (numberValue === '') {
        accessDenied(number, "Invalid Phone Number!!!");
    } else if (numberValue.length < 11){
        accessDenied(number, "More than 11 digits needed!!!");
    } else{
        permissionGranted(number)
    }

    if (emailValue === '') {
        accessDenied(email, "Insert your Email Address!!!");
    } else if (!isEmail(emailValue)) {
        accessDenied(email, "Invalid Email Address!!!");
    } else{
        permissionGranted(email);
    }
    if (fullValue.length >= 5 && addressValue !== '' && numberValue.length >= 11 &&  isEmail(emailValue)) {
        popup.classList.add("view-slide");
    } 
  
}

function accessDenied(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    formGroup.className = 'form-group error';
    small.innerText = message;
}

function permissionGranted(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success'; 
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function closeSlide(){
    cSlide =  form.submit(popup.classList.remove("view-slide"));
}

// function successfullyBooked(){
    
//     if(verifyInputs() === permissionGranted(input)){
//         const bookingSuccess = form.querySelector(".h5");
//         bookingSuccess.innerText = "Booking Successfull";
//     }
// }