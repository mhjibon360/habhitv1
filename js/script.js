$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(".fa-bars-staggered").toggleClass("fa-xmark");
  });

  $(".skitter-large").skitter();

  // color swithcer show
  $(".switchericion").on("click", function (param) {
    $(".swithverman").toggleClass("thembtnboxshow");
  });

  // color chooser
  $(".themebtn").each(function (param) {
    $(this).on("click", function (param) {
      let colors = $(this).attr("data-color");
      document.documentElement.style.setProperty("--main-color", colors);
    });
  });
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}
