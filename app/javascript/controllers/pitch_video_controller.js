import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="pitch-video"
export default class extends Controller {
  connect() {
    // after 2 seconds the gif background image will be replaced with a jpg image, that play botton appears and pulses
    setTimeout(() => {
      this.element.classList.remove('animated-img');
      this.element.classList.add('static-img');
      this.element.querySelector('i').classList.remove('d-none');
    }, 2400);
  }
  startVideo() {
    this.element.querySelector('video').play();
  }
  stopVideo() {
    this.element.querySelector('video').pause();
  }
}
