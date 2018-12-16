/**
 * Search Component
 * @class Search
 * @extends {Component}
 */
class Search extends Component {
  /**
   * Creates an instance of Search
   * @param {String} tag - HTMl element tag
   * @param {Function} callback - Function makes the fetch requests to the API
   */
  constructor(tag, callback) {
    super(tag);

    this.element.className = 'search';

    this.form = document.createElement('form');
    this.form.className = 'search__form';
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      let query = this.name.value;
      callback(query);
    });
    this.element.appendChild(this.form);

    this.name = document.createElement('input');
    this.name.className = 'search__input';
    this.name.placeholder = 'Search by username...';
    this.form.appendChild(this.name);

    this.searchButton = document.createElement('button');
    this.searchButton.className = 'search__submit-button';
    this.searchButton.type = 'submit';
    this.searchButton.innerText = 'Search';
    this.form.appendChild(this.searchButton);
  }
}
