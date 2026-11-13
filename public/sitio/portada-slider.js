/* Carrusel de la portada: cambia cada 20 segundos, con flechas y puntos */
(function () {
  var s = document.querySelector("[data-slider]");
  if (!s) return;
  var slides = [].slice.call(s.querySelectorAll(".slide"));
  var dotsBox = s.querySelector(".slider-dots");
  var bar = s.querySelector(".slider-bar span");
  var DELAY = 20000, cur = 0, timer = null, dots = [];

  slides.forEach(function (_, n) {
    var b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", "Ir a la imagen " + (n + 1));
    b.addEventListener("click", function () { show(n); });
    dotsBox.appendChild(b);
    dots.push(b);
  });

  function schedule() {
    clearTimeout(timer);
    bar.classList.remove("run");
    void bar.offsetWidth;
    bar.classList.add("run");
    timer = setTimeout(function () { show(cur + 1); }, DELAY);
  }

  function show(n) {
    cur = (n + slides.length) % slides.length;
    slides.forEach(function (el, i) { el.classList.toggle("is-active", i === cur); });
    dots.forEach(function (d, i) { d.classList.toggle("is-active", i === cur); });
    if (!s.classList.contains("is-paused")) schedule();
  }

  s.querySelector(".slider-prev").addEventListener("click", function () { show(cur - 1); });
  s.querySelector(".slider-next").addEventListener("click", function () { show(cur + 1); });
  s.addEventListener("mouseenter", function () { s.classList.add("is-paused"); clearTimeout(timer); });
  s.addEventListener("mouseleave", function () { s.classList.remove("is-paused"); schedule(); });
  s.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });

  s.classList.add("is-ready");
  show(0);
})();
