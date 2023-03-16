window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })
})

const menu = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItem = document.querySelectorAll('.navigation a')

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navigation.classList.toggle("active");
})

navigationItem.forEach(navItem => {
  navItem.addEventListener('click', () => {
    menu.classList.remove('active')
    navigation.classList.remove('active')
  })
})


function validate() {
  let name = document.querySelector(".username");
  let lastName = document.querySelector(".lastname");
  let email = document.querySelector(".email");
  let phoneNumber = document.querySelector(".phonenumber");
  let msg = document.querySelector(".message");
  let submit = document.querySelector(".submit");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      name.value == "" ||
      email.value == "" ||
      lastName.value == "" ||
      phoneNumber.value == "" ||
      msg == ""
    ) {
      inputEmpty();
    } else {
      emailSend(
        name.value,
        lastName.value,
        email.value,
        phoneNumber.value,
        msg.value
      );
      success();
    }
  });
}
validate();

function emailSend(name, lastName, email, phoneNumber, msg) {
  emailjs.send("service_psgd1ai", "Jurayev-Bunyodbek", {
    from_name: name,
    last_name: lastName,
    phone_number: phoneNumber,
    message: msg,
    from_email: email,
  });
}
function success() {
  swal({
    title: "Good job!",
    text: "successfully sent message!",
    icon: "success",
    button: "Done",
  });
}

function error() {
  swal({
    title: "Ooops!",
    text: "Something went wrong, message could not be sent!",
    icon: "error",
    button: "Ok",
  });
}
function inputEmpty() {
  swal({
    title: "Ok!",
    text: "imputs fields are required!",
    icon: "error",
    button: "Ok",
  });
}







