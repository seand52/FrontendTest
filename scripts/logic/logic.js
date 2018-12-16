const logic = {
  url: 'https://api.github.com/',

  /**
   * Searches for user information 
   * @param {String} query - github username 
   * @returns {Promise <Array>} 
   */
  searchUser(query) {
    if (typeof query !== 'string') throw new TypeError(`${query} is not a string`);
    if (!query.trim()) throw Error('query is empty or blank');

    const route = `users/${query}`;
    const options = {
      method: 'GET',
    };

    return (async () => {

      let res = await fetch(this.url + route, options);

      res = await res.json();

      if (res.message === 'Not Found') throw Error(`User ${query} was not found`);

      return res
    })();
  },

  /**
   * Search repositories for a specific user
   * @param {String} query - Github username
   * @returns {Promise <Array>}
   */
  searchRepositories(query) {
    if (typeof query !== 'string') throw new TypeError(`${query} is not a string`);
    if (!query.trim()) throw Error('query is empty or blank');

    const route = `users/${query}/repos`;
    const options = {
      method: 'GET',
    };

    return (async () => {
      let res = await fetch(this.url + route, options);

      res = await res.json();

      if (res.message === 'Not Found') throw Error(`User ${query} was not found`);
      
      return res;
    })();
  },
};


