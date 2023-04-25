// app/javascript/controllers/reponse_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["reponse"];

  showAnswer(event) {
    const container = event.currentTarget.closest(".container-phrase-reponse-defi-solution");
    const defiId = container.dataset.defiId;
    const reponse = container.querySelector(".reponse-defi-solution");
    const isVisible = reponse.classList.contains("visible");

    if (!isVisible) {
      reponse.textContent = this.getReponseForDefi(defiId); // récupérer la réponse correspondante
      reponse.classList.add("anim-top-to-bottom", "visible");
      document.addEventListener("click", (event) => this.hideAnswer(event));
    }
  }

  getReponseForDefi(defiId) {
    // ici, vous pouvez retourner la réponse correspondant à l'identifiant de défi donné
    switch (defiId) {
      case "defi-1":
        return "Réponse pour le défi 1";
      case "defi-2":
        return "Réponse pour le défi 2";
      case "defi-3":
        return "Réponse pour le défi 3";
      case "defi-4":
        return "Réponse pour le défi 4";
      case "defi-5":
        return "Réponse pour le défi 5";
      // ajoutez des cas pour chaque défi
      default:
        return ""; // retourne une chaîne vide si l'identifiant de défi est inconnu
    }
  }

  hideAnswer(event) {
    event.preventDefault()
    reponse.textContent = this.getReponseForDefi(defiId); // récupérer la réponse correspondante
    // Ignore event if clicked within element
    if(this.reponse.textContent === event.reponseTarget || this.reponseTarget.contains(event.target)) return;

    // Execute the actual action we're interested in
    this.reponseTarget.classList.remove("visible", "anim-top-to-bottom");
    setTimeout(() => {
      this.reponseTarget.style.display = "none";
      this.reponseTarget.style.transform = "translateY(-10px)";
    }, 200);
  }
}

// export default class extends Controller {
//   static targets = ["reponse"];

//   showAnswer() {
//     const isVisible = this.reponseTarget.classList.contains("visible");

//     if (!isVisible) {
//       this.reponseTarget.classList.add("anim-top-to-bottom", "visible");
//       document.addEventListener("click", (event) => this.hideAnswer(event));
//     }
//   }

//   hideAnswer(event) {
//   event.preventDefault()
//   // Ignore event if clicked within element
//   if(this.element === event.reponseTarget || this.element.contains(event.target)) return;

//   // Execute the actual action we're interested in
//   this.reponseTarget.classList.remove("visible", "anim-top-to-bottom");
// }

  // hideAnswer(event) {
  //   if (!this.reponseTarget.contains(event.target)) {
  //     this.reponseTarget.classList.remove("visible");
  //     setTimeout(() => {
  //       this.reponseTarget.classList.remove("visible");
  //     }, 500);
  //     document.removeEventListener("click", this.hideAnswer.bind(this));
  //   }
  // }

//
// showAnswer(event) {
  // const clickedElement = event.target;
  // const reponseTarget = clickedElement.closest("reponse");
  // const isVisible = reponseTarget.classList.contains("visible");
//
  // if (!isVisible) {
    // reponseTarget.classList.add("anim-top-to-bottom", "visible");
    // document.addEventListener("click", (event) => this.hideAnswer(event));
  // }
// }
//
// hideAnswer(event) {
  // const clickedElement = event.target;
  // const reponseTarget = clickedElement.closest("reponse");
//
  // if (!reponseTarget.contains(clickedElement)) {
    // reponseTarget.classList.remove("visible");
    // document.removeEventListener("click", this.hideAnswer.bind(this));
  // }
// }
