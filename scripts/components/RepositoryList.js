/**
 * Repository List Component
 * @class Repository List
 * @extends {Component}
 */
class RepositoryList extends Component {
  /**
   * Creates an instance of RepositoryList
   * @param {String} tag - html element tag
   */
  constructor(tag) {
    super(tag);
    this.element.className = 'repositories';

    this.title = document.createElement('h4');
    this.title.innerText = 'Repositories';
    this.title.className = 'repositories__title';
    this.element.appendChild(this.title);
    
    this.ul = document.createElement('ul');
    this.ul.className = 'repositories__list';
    this.element.appendChild(this.ul);
  }
}
