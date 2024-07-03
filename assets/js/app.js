const desktop = document.getElementsByClassName("desktop")[0];

desktop.addEventListener("click", function () {
  desktop.classList.toggle("muncul");
});
const sr = ScrollReveal({
  distance: "40px",
  duration: 2050,
  delay: 200,
  reset: false,
});
sr.reveal(".bottom", { origin: "bottom" });
sr.reveal(".top", { origin: "top" });
sr.reveal(".left", { origin: "left" });
sr.reveal(".right", { origin: "right" });
