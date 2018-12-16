/**
 * UserCard Component
 * @class UserCard
 * @extends {Component}
 */
class UserCard extends Component {
  /**
   * Creates an instance of UserCard
   * @param {Object} props 
   * @param {String} props.tag - HTML element tag
   * @param {String} props.username - Github user username
   * @param {String} props.avatar - Github profile picture url
   * @param {String} props.fullName - Github user full name
   * @param {bio} props.bio - Github user bio
   */
  constructor({ tag, username = null, avatar = null, fullName = null, bio = null }) {
    super(tag);

    this.element.className = 'user-card';

    this.imageContainer = document.createElement('div');
    this.imageContainer.className = 'img-container';
    this.element.appendChild(this.imageContainer);

    this.imageBox = document.createElement('div');
    this.imageBox.className = 'img-container__box';
    this.imageContainer.appendChild(this.imageBox);

    this.image = document.createElement('img');
    this.image.src = avatar ? avatar : '';
    this.imageBox.appendChild(this.image);

    this.infoContainer = document.createElement('div');
    this.infoContainer.className = 'info-container';
    this.element.appendChild(this.infoContainer);

    this.username = document.createElement('p');
    this.username.className = 'user-card__username';
    this.username.innerText = `@${username}`;
    this.infoContainer.appendChild(this.username);

    this.fullName = document.createElement('h2');
    this.fullName.className = 'user-card__fullName';
    this.fullName.innerText = fullName ? fullName : null;
    this.infoContainer.appendChild(this.fullName);

    this.bio = document.createElement('p');
    this.bio.className = 'user-card__bio';
    this.bio.innerText = bio ? bio : 'This user does not have a bio';
    this.infoContainer.appendChild(this.bio);
  }
}
