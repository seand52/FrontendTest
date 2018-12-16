/**
 * Error Panel component
 * @class ErrorPanel
 * @extends {Component}
 */
class ErrorPanel extends Component {
  /**
   * Creates an instance of ErrorPanel
   * @param {String} tag -html element tag
   * @param {String} message - Error message given by github API
   * @memberof ErrorPanel
   */
  constructor(tag, message) {
    super(tag);

    this.element.className = 'error-panel';
    this.closeButton = document.createElement('i');
    this.closeButton.className = 'fas fa-times';
    this.closeButton.addEventListener('click', () => {
      this.hide()
    });
    this.element.appendChild(this.closeButton);

    this.errorMessage = document.createElement('p');
    this.errorMessage.innerText = message;
    this.element.appendChild(this.errorMessage);

  }
}
