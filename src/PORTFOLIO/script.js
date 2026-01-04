let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLiks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLiks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");

  let footer=document.querySelector('footer');
  footer.classList.toggle('show-animate', (this.innerHeight + this.scrollY) >= document.scrollingElement.scrollHeight)
};

document.addEventListener("DOMContentLoaded", function(){
  var form = document.getElementById("contact-form");
  var status = document.getElementById("contact-status");
  if (form) {
    if (window.emailjs) {
      emailjs.init("8-nvwbg8Te_Gn8A6l");
    }
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var data = new FormData(form);
      var payload = {
        fullName: data.get("fullName"),
        email: data.get("email"),
        phone: data.get("phone"),
        subject: data.get("subject"),
        message: data.get("message")
      };
      if (window.emailjs) {
        status.textContent = "Sending...";
        emailjs.send("service_ok6owbq", "template_aki8x8v", payload)
          .then(function(){
            status.innerHTML = '<i class="bx bx-check-circle"></i> Message sent successfully.';
            form.reset();
          })
          .catch(function(){
            status.textContent = "Failed to send. Try again.";
          });
      } else {
        status.textContent = "Service unavailable.";
      }
    });
  }
});
