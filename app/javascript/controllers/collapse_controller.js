import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="collapse"
export default class extends Controller {
  static targets = ['expanded', 'collapser', 'uncollapser']

  connect() {
  }
  uncollapse() {
    this.expandedTarget.style.display = 'flex';
    this.collapserTarget.style.display = 'flex';
    this.uncollapserTarget.style.display = 'none';
    this.element.scrollIntoView({behavior: "smooth"});
  }
  collapse() {
    this.expandedTarget.style.display = 'none';
    this.collapserTarget.style.display = 'none';
    this.uncollapserTarget.style.display = 'flex';
    this.element.scrollIntoView({behavior: "smooth"});
  }
}
