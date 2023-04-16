// app/javascript/controllers/reponse_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["reponse"];

  showAnswer() {
    this.reponseTarget.classList.add("visible");
  }
}
