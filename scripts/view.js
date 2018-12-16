const view = {
  app: document.querySelector('.app'),
  userCard: null,
  repositoryList: null,
  error: null,

  instantiateComponents() {
    this.userCard = new UserCard({ tag: 'section' });
    this.app.appendChild(this.userCard.element);
    this.userCard.empty();

    this.repositoryList = new RepositoryList('section');
    this.app.appendChild(this.repositoryList.element);
    this.repositoryList.empty();

    this.error = new ErrorPanel('section', null);
    this.app.appendChild(this.error.element);
    this.error.empty();
  },

  renderUserCard(user) {
    
    const { avatar_url, bio, login, name } = user;

    this.userCard = new UserCard({
      tag: 'section',
      username: login,
      avatar: avatar_url,
      fullName: name,
      bio: bio,
    });

    this.app.appendChild(this.userCard.element);

  },

  renderRepositoryList(repositories) {
    this.repositoryList = new RepositoryList('section');

    this.app.appendChild(this.repositoryList.element);

    repositories.forEach(repository => {
      this.repositoryList.list_elements = document.createElement('li');
      this.repositoryList.ul.appendChild(this.repositoryList.list_elements);

      this.repositoryList.repositoryName = document.createElement('h3');
      this.repositoryList.repositoryName.innerText = repository.name;
      this.repositoryList.list_elements.appendChild(this.repositoryList.repositoryName);


      this.repositoryList.starsContainer = document.createElement('div');
      this.repositoryList.starsContainer.className = 'stars-container';
      this.repositoryList.list_elements.appendChild(this.repositoryList.starsContainer);
      this.repositoryList.starIcon = document.createElement('i');
      this.repositoryList.starIcon.className= 'fas fa-star';
      this.repositoryList.starsContainer.appendChild(this.repositoryList.starIcon);
      this.repositoryList.repositoryStars = document.createElement('span');
      this.repositoryList.repositoryStars.innerText = repository.stargazers_count;
      this.repositoryList.starsContainer.appendChild(this.repositoryList.repositoryStars);

      this.repositoryList.forksContainer = document.createElement('div');
      this.repositoryList.forksContainer.className = 'forks-container';
      this.repositoryList.list_elements.appendChild(this.repositoryList.forksContainer);
      this.repositoryList.forksIcon = document.createElement('img');
      this.repositoryList.forksIcon.className = 'forks-container__icon';
      this.repositoryList.forksIcon.src='./images/forks.svg';
      this.repositoryList.forksContainer.appendChild(this.repositoryList.forksIcon);
      this.repositoryList.repositoryForks = document.createElement('span');
      this.repositoryList.repositoryForks.innerText = repository.forks_count;
      this.repositoryList.forksContainer.appendChild(this.repositoryList.repositoryForks);

  
    });
  },

  renderErrorPanel(err) {
    this.error = new ErrorPanel('section', err.message);
    this.app.appendChild(this.error.element);
  },

  clearElements() {
    this.userCard.empty();
    this.repositoryList.empty();
    this.error.empty();
  },
  
};
