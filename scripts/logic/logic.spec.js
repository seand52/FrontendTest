describe('logic', () => {
  describe('search of github username', () => {
    it('should succeed on valid username', async () => {
      const query = 'seand52';

      const userInfo = await logic.searchUser(query);
      expect(userInfo).toBeDefined();
      expect(userInfo.login).toEqual(query);
      expect(userInfo.name).toEqual('Sean');
      expect(userInfo.bio).toEqual(null);
      expect(userInfo.avatar_url).toEqual('https://avatars0.githubusercontent.com/u/30256079?v=4');
    });

    it('should throw error on non-existant username', async () => {
      const query = 'mfosefwoiwj';
      let errorMessage= null
      await logic.searchUser(query).catch(err => errorMessage = err.message);
      expect(errorMessage).toEqual(`User ${query} was not found`);
    });

    it('should fail on undefined username', () => {
      expect(() => logic.searchUser(undefined)).toThrowError(TypeError, 'undefined is not a string');
    });
    it('should fail on null username', () => {
      expect(() => logic.searchUser(null)).toThrowError(TypeError, 'null is not a string');
    });
    it('should numeric on null username', () => {
      expect(() => logic.searchUser(7)).toThrowError(TypeError, '7 is not a string');
    });
    it('should fail on empty username', () => {
      expect(() => logic.searchUser('')).toThrowError(Error, 'query is empty or blank');
    });
    it('should fail on blank username', () => {
      expect(() => logic.searchUser('          \n        ')).toThrowError(
        Error,
        'query is empty or blank',
      );
    });
  });

  describe('search of github repositories', () => {
    it('should succeed on valid username', async () => {
      const query = 'seand52';

      const repositories = await logic.searchRepositories(query);
      expect(repositories.length).toEqual(7);
      const [
        repository1,
        repository2,
        repository3,
        repository4,
        repository5,
        repository6,
        repository7
      ] = repositories;

      expect(repository1.name).toEqual('33-js-concepts');
      expect(repository1.stargazers_count).toEqual(0);
      expect(repository1.forks_count).toEqual(0);

      expect(repository2.name).toEqual('document_cluster');
      expect(repository2.stargazers_count).toEqual(0);
      expect(repository2.forks_count).toEqual(0);

      expect(repository3.name).toEqual('freeCodeCamp');
      expect(repository3.stargazers_count).toEqual(0);
      expect(repository3.forks_count).toEqual(0);

      expect(repository4.name).toEqual('FrontendTest');
      expect(repository4.stargazers_count).toEqual(0);
      expect(repository4.forks_count).toEqual(0);

      expect(repository5.name).toEqual('kanban-app');
      expect(repository5.stargazers_count).toEqual(0);
      expect(repository5.forks_count).toEqual(0);

      expect(repository6.name).toEqual('skylab-bootcamp-201809');
      expect(repository6.stargazers_count).toEqual(0);
      expect(repository6.forks_count).toEqual(0);

      expect(repository7.name).toEqual('socialDev');
      expect(repository7.stargazers_count).toEqual(0);
      expect(repository7.forks_count).toEqual(0);
    });

    it('should throw error on non-existant username', async () => {
      const query = 'mfosefwoiwj';
      let errorMessage= null
      await logic.searchRepositories(query).catch(err => errorMessage = err.message);
      expect(errorMessage).toEqual(`User ${query} was not found`);
    });

    it('should fail on undefined username', () => {
      expect(() => logic.searchRepositories(undefined)).toThrowError(
        TypeError,
        'undefined is not a string',
      );
    });
    it('should fail on null username', () => {
      expect(() => logic.searchRepositories(null)).toThrowError(TypeError, 'null is not a string');
    });
    it('should numeric on null username', () => {
      expect(() => logic.searchRepositories(7)).toThrowError(TypeError, '7 is not a string');
    });
    it('should fail on empty username', () => {
      expect(() => logic.searchRepositories('')).toThrowError(Error, 'query is empty or blank');
    });
    it('should fail on blank username', () => {
      expect(() => logic.searchRepositories('          \n        ')).toThrowError(
        Error,
        'query is empty or blank',
      );
    });
  });
});
