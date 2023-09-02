//SLIDER

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const sliderContainer = document.querySelector(".slider-container");
const sliderItems = document.querySelectorAll('[data-index=""]');
const slideIndex = document.querySelector("#slide-index");
console.log(slideIndex);

sliderItems.forEach(function (slide, index) {
  if (index !== 0) {
    slide.classList.add("hidden");
  }
  slide.dataset.index = index;
  sliderItems[0].setAttribute("data-active", "");
  slide.addEventListener("click", function () {
    slide.classList.add("hidden");
    slide.removeAttribute("data-active");
    const nextslideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
    const nextSlide = sliderContainer.querySelector(
      `[data-index = "${nextslideIndex}"]`
    );
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
  });
});

next.onclick = function () {
  const currentSlide = sliderContainer.querySelector("[data-active='']");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  const nextslideIndex =
    currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  const nextSlide = sliderContainer.querySelector(
    `[data-index = "${nextslideIndex}"]`
  );

  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
  slideIndex.textContent = "0" + `${nextslideIndex + 1}`;
};

prev.onclick = function () {
  const currentSlide = sliderContainer.querySelector("[data-active='']");
  const currentSlideIndex = +currentSlide.dataset.index;

  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  const prevslideIndex =
    currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  const prevSlide = sliderContainer.querySelector(
    `[data-index = "${prevslideIndex}"]`
  );

  prevSlide.classList.remove("hidden");
  prevSlide.setAttribute("data-active", "");
  slideIndex.textContent = "0" + `${prevslideIndex + 1}`;
};

//Mobile-nav
const menuBtn = document.querySelector(".mobile-nav-btn");
const menuIcon = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const nav = document.querySelector(".mobile-nav");
const fade = document.querySelector(".mobile-nav-fade");

menuIcon.onclick = function () {
  $(menuIcon).slideToggle("medium");
  closeBtn.classList.toggle("close-icon");
  closeBtn.classList.toggle("close-icon--open");
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  document.body.classList.toggle("no-scroll");
};
closeBtn.onclick = function () {
  $(menuIcon).slideToggle("medium");
  closeBtn.classList.toggle("close-icon");
  closeBtn.classList.toggle("close-icon--open");
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  document.body.classList.toggle("no-scroll");
};
//Form
const fadeForm = document.querySelector(".form-wrapper");
const formBtn = document.querySelector(".catalog__btn");
const form = document.querySelector(".form");
const formClose = document.querySelector(".form__img");
const inputs = document.querySelectorAll("[data-input='']");
const formSend = document.querySelector(".form__btn");

formBtn.onclick = function () {
  $(form).slideDown("slow");
  fadeForm.classList.toggle("form-wrapper--open");
  document.body.classList.toggle("no-scroll");
};
formClose.onclick = function () {
  $(form).slideUp("slow");
  fadeForm.classList.toggle("form-wrapper--open");
  document.body.classList.toggle("no-scroll");
};
formSend.onclick = function () {
  inputs.forEach(function (item) {
    item.value = "";
  });
};

//Scroll buttons

const scrollBtn = document.querySelectorAll("[data-scroll='']");

scrollBtn.forEach(function (item) {
  item.onclick = function () {
    $(menuIcon).slideToggle("medium");
    closeBtn.classList.toggle("close-icon");
    closeBtn.classList.toggle("close-icon--open");
    nav.classList.toggle("mobile-nav--open");
    fade.classList.toggle("mobile-nav-fade--open");
    document.body.classList.toggle("no-scroll");
  };
});
