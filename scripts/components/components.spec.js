describe('components test', () => {

  describe('component', () => {
    const tagName = 'COMPONENT'
    const component = new Component(tagName);

    it('component should be an instanceOf Component', () => {
      expect(component).toEqual(jasmine.any(Component));
    });
  
    it('component element should be an instanceOf HTMLElement', () => {
      expect(component.element).toEqual(jasmine.any(HTMLElement));
    });
  
    it('component tag should be section', () => {
      expect(component.element.tagName).toEqual(tagName);
    });

    it('should hide correctly', () => {
      component.hide()
      expect(component.element.style.display).toEqual('none');
    });
    it('should show correctly', () => {
      component.show()
      expect(component.element.style.display).toEqual('block');
    });
 
  });

  describe('error-panel', () => {
    const message = 'user not found';
    const tagName = 'SECTION'
    const className = 'error-panel';
    const error = new ErrorPanel(tagName, message);

    it('error-panel should be an instanceOf Component', () => {
      expect(error).toEqual(jasmine.any(Component));
    });
  
    it('error-panel element should be an instanceOf HTMLElement', () => {
      expect(error.element).toEqual(jasmine.any(HTMLElement));
    });
  
    it('error-panel message should be correct', () => {
      expect(error.element.innerText).toEqual(message);
    });
  
    it('error-panel element should have the correct class name', () => {
      expect(error.element.className).toEqual(className);
    });
  
    it('error-panel tag should be section', () => {
      expect(error.element.tagName).toEqual(tagName);
    });

    it('should hide correctly', () => {
      error.hide()
      expect(error.element.style.display).toEqual('none');
    });
    it('should show correctly', () => {
      error.show()
      expect(error.element.style.display).toEqual('block');
    });
 
  });

  describe('repository-list', () => {
    const tagName = 'SECTION'
    const className = 'repositories';
    const repositories = new RepositoryList(tagName);
  
    it('repository list should be an instanceOf Component', () => {
      expect(repositories).toEqual(jasmine.any(Component));
    });
  
    it('repository list element should be an instanceOf HTMLElement', () => {
      expect(repositories.element).toEqual(jasmine.any(HTMLElement));
    });
  
    it('repository list element should have the correct class name', () => {
      expect(repositories.element.className).toEqual(className);
    });
  
    it('repository list tag should be section', () => {
      expect(repositories.element.tagName).toEqual(tagName);
    });
    it('should hide correctly', () => {
      repositories.hide()
      expect(repositories.element.style.display).toEqual('none');
    });
    it('should show correctly', () => {
      repositories.show()
      expect(repositories.element.style.display).toEqual('block');
    });
  });

  describe('search', () => {
    const tagName = 'SECTION'
    const className = 'search';
    const search = new Search(tagName , () => console.log('callback'));
  
    it('search component should be an instanceOf Component', () => {
      expect(search).toEqual(jasmine.any(Component));
    });
  
    it('search component element should be an instanceOf HTMLElement', () => {
      expect(search.element).toEqual(jasmine.any(HTMLElement));
    });
  
    it('search component element should have the correct class name', () => {
      expect(search.element.className).toEqual(className);
    });
  
    it('search component tag should be section', () => {
      expect(search.element.tagName).toEqual(tagName);
    });
    it('should hide correctly', () => {
      search.hide()
      expect(search.element.style.display).toEqual('none');
    });
    it('should show correctly', () => {
      search.show()
      expect(search.element.style.display).toEqual('block');
    });
  });

  describe('user card', () => {
    const tagName = 'SECTION'
    const className = 'user-card';
    const userCard = new UserCard({tag: tagName, username: 'seand52', fullName: 'seand52', bio: 'bio'});
  
    it('user card component should be an instanceOf Component', () => {
      expect(userCard).toEqual(jasmine.any(Component));
    });
  
    it('user card component element should be an instanceOf HTMLElement', () => {
      expect(userCard.element).toEqual(jasmine.any(HTMLElement));
    });
  
    it('user card component element should have the correct class name', () => {
      expect(userCard.element.className).toEqual(className);
    });
  
    it('user card component tag should be section', () => {
      expect(userCard.element.tagName).toEqual(tagName);
    });
    it('should hide correctly', () => {
      userCard.hide()
      expect(userCard.element.style.display).toEqual('none');
    });
    it('should show correctly', () => {
      userCard.show()
      expect(userCard.element.style.display).toEqual('block');
    });
  });
})

