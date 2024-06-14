import debounce from "./debounce.js";

export default class AnimacaoScroll {
  constructor(target) {
    this.sections = document.querySelectorAll(target);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 100);
    this.active = "ativo";
  }
  // Pega a distancia de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }
  // Verifica a distancia em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.active);
      } else if (item.element.classList.contains(this.active)) {
        item.element.classList.remove(this.active);
      }
    });
  }
  /*
  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) section.classList.add("ativo");
      else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
*/
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
  // Remove o evento de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
