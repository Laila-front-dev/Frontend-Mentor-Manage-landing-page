// NAVIGATION
const menuToggle = document.querySelector(".menu__toggle");
const sitNavigation = document.querySelector(".primary__navigation");
const overlay = document.querySelector(".overlay");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  isOpen ? closeMenu() : openMenu();
});

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  sitNavigation.setAttribute("data-state", "opened");
  overlay.classList.add("show");
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  sitNavigation.setAttribute("data-state", "closed");
  overlay.classList.remove("show");
  // overlay.style.display = "none";
}

// FORM VALIDATION
const email = document.querySelector("#email");
const form = document.querySelector("#singup");

const checkEmail = () => {
  let valid = false;
  const emails = email.value.trim();
  if (!isRequired(emails)) {
    showError(email, "Email cannot be blank.");
  } else if (!isEmailValid(emails)) {
    showError(email, "Please insert a valid email");
  } else {
    showSuccess(email);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = (value) => (value === "" ? false : true);

const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove("error");

  const error = formField.querySelector("small");
  error.textContent = "";
};

form.addEventListener("submit", (e) => {
  console.log("coco");
  e.preventDefault();

  let isEmailValid = checkEmail();

  let isFormValid = isEmailValid;

  if (isFormValid) {
  }
});

form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "email":
      checkEmail();
      break;
  }
});

// TESTIMONIAL SLIDER
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      grabCursor: true,
    },
  },
});
