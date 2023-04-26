// app/javascript/controllers/reponse_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["closing1", "closing2", "reponse1", "reponse2", "reponse3", "reponse4", "reponse5", "phrase1", "phrase2", "phrase3", "phrase4", "phrase5"];

  showAnswer(event) {
    const removeActiveClasses = () => {
      const answers = document.querySelectorAll(".reponse-defi-solution");
      answers.forEach(answer => {
          answer.classList.remove('anim-top-to-bottom');
          answer.classList.add('hide');
      });
    }

    removeActiveClasses();
    if (event.target === this.phrase1Target) {
      this.reponse1Target.classList.toggle("anim-top-to-bottom");
    } else if (event.target === this.phrase2Target) {
      this.reponse2Target.classList.toggle("anim-top-to-bottom");
    } else if (event.target === this.phrase3Target) {
      this.reponse3Target.classList.toggle("anim-top-to-bottom");
    } else if (event.target === this.phrase4Target) {
      this.reponse4Target.classList.toggle("anim-top-to-bottom");
    } else if (event.target === this.phrase5Target) {
      this.reponse5Target.classList.toggle("anim-top-to-bottom")};
  }

  hideAnswer(e) {
    const answers = document.querySelectorAll(".reponse-defi-solution");
    if (e.target.contains(this.closing1Target) && e.target!== this.closing2Target) {
      console.log("hello")
      answers.forEach((answer) => {
      answer.classList.remove("anim-top-to-bottom");
    });
  };
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
