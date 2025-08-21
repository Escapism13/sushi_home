//кнопка мгновенно вверх
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// плавный переход с якорей на ссылки
document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]'); //все ссылки href

  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); //дефать стандартный переход по ссылке

      const targetId = this.getAttribute('href'); //id целевого элемента
      const targetElement = document.querySelector(targetId); //элемент с этим id

      if (targetElement) {
        targetElement.scrollIntoView({ //прокрутка страницы к элементу
          behavior: 'smooth', //плавная прокрутка
          block: 'start' //выравнивание по верхнему краю
        });
      }
    });
  });
});
