import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navigation"
export default class extends Controller {
  static targets = ['cv', 'portfolio', 'start']

  connect() {
  }
  to_cv() {
    // set display property to none for portfolioTarget
    this.portfolioTarget.style.display = 'none';
    // set display property to none for startTarget
    this.startTarget.style.display = 'none';
    // set display property to flex for cvTarget
    this.cvTarget.style.display = 'block';
  }
  to_portfolio() {
    // set display property to none for cvTarget
    this.cvTarget.style.display = 'none';
    // set display property to none for startTarget
    this.startTarget.style.display = 'none';
    // set display property to flex for portfolioTarget
    this.portfolioTarget.style.display = 'block';
  }
  to_start() {
    // set display property to none for cvTarget
    this.cvTarget.style.display = 'none';
    // set display property to none for portfolioTarget
    this.portfolioTarget.style.display = 'none';
    // set display property to flex for startTarget
    this.startTarget.style.display = 'block';
  }
}
