// import { Controller } from "@hotwired/stimulus"

// // Connects to data-controller="filters-articles"
// export default class extends Controller {
//   // app/javascript/controllers/decryptage_controller.js
//   static targets = ['articles'];

//   connect() {
//     console.log('Hello');
//   }

//   filter(event) {
//     const isChecked = event.currentTarget.checked;
//     const category = event.currentTarget.dataset.category;

//     this.articlesTargets.forEach((article) => {
//       const articleCategory = article.querySelector('.category-article').innerText;
//       article.style.display = isChecked && articleCategory === category ? 'block' : 'none';
//     });
//   }
// }
