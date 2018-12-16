view.instantiateComponents()

let search = new Search('section', async query => {
  view.clearElements();

  view.userCard.hide();
  try {
    
  await Promise.all([logic.searchUser(query), logic.searchRepositories(query)])
    .then(result => {
      const [user, repositories] = result;

      view.renderUserCard(user);

      view.renderRepositoryList(repositories);

    })
    .catch(err => {
      view.renderErrorPanel(err);

    });
  } catch(err) {
    view.renderErrorPanel(err);
    
  }
});

view.app.appendChild(search.element);
