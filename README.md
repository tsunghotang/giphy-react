# Giphy-Search-React

Simple React app that uses Giphy's API to search for and view GIFS.

 This repo contains two branches which builds the same app differently.

**Master** - Uses both functional and class components.

**React-Hook-Giphy** - Uses functional components and React Hooks.

---

![](Screenshot.png)

App home: https://tsunghotang.github.io/giphy-react/


---

## Built With
- [React](https://guides.rubyonrails.org/) - Front-end
- [Giphy API](https://yarnpkg.com/package/giphy-api)
- [Webpack](https://heroku.com/)
- [Babel](https://www.postgresql.org/)
- [gh-pages](https://yarnpkg.com/package/gh-pages) - Deployment


---
### Setup
Install JS packages
```
yarn install
```

### Scripts
To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```
---
# Todo
* Improve accessibility - styling for focusable elements.
* Load more results and introduce lazy loading or infinite scroll
