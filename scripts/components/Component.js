/**
 * Model class to components
 * @class Component
 */
class Component {
  /**
   *
   * @param {String} tag - html element tag 
   * @memberof Component
   */
  constructor(tag) {
    this.element = document.createElement(tag);
  }
  /**
   * Make element visible
   * @memberof Component
   */
  show() {
    this.element.style.display = 'block';
  }
  /**
   * Hide element
   * @memberof Component
   */
  hide() {
    this.element.style.display = 'none';
  }
  /**
   * Empty the contents of the component
   * @memberof Component
   */
  empty() {
    while (this.element.firstChild) this.element.removeChild(this.element.firstChild);
  }
}
