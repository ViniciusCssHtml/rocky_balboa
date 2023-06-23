function initFaq() {
  const dt = document.querySelectorAll("dt");
  dt.forEach((item) => {
    item.addEventListener("click", faq);
  });
  function faq() {
    this.classList.toggle("faq__lista__pergunta__active");
    this.nextElementSibling.classList.toggle("faq__lista__resposta__active");
  }
}
initFaq();

function initNav(index) {
  const container = document.querySelectorAll(".instrutor__info");
  const img = document.querySelectorAll(".instrutores__container__lista__img");

  container.forEach((item) => {
    item.classList.remove("instrutor__info__active");
  });
  container[index].classList.add("instrutor__info__active");

  img.forEach((item, index) => {
    item.addEventListener("click", function () {
      initNav(index);
    });
  });
}
initNav(0);
