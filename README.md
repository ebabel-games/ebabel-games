# [ebabel.eu](https://ebabel.eu)
React.js and Node.js Freelancer in Amsterdam - Contact Thomas Amar on +31 (0)6 21 80 98 99

## Development

### Pre-install
Your local environment relies on [Node.js](https://nodejs.org), [Firebase](https://firebase.google.com/), and [Gatsby.js](https://www.gatsbyjs.org) (you may need to `sudo` on your machine):

```
npm install -g firebase-tools gatsby-cli
```

Once installed, you may need to login if it's not already done:

```
firebase login
```

If you are in a cloud virtual machine, you might need to run a different login command, and when on another device you have authenticated, paste back into virtual machine the authorozation token:

```
firebase login --no-localhost
```

### Install and develop
During development, there are dev dependencies that should be installed.

```
npm install
```

- `npm start` — This will spawn a development server with a default port of `8000`.
- `npm run build` — This will output a production build in the `public` directory.

## Deployment

### Deploy only hosting
```
npm run build
firebase deploy --only hosting
```

### Deploy both hosting files and database
```
npm run build
firebase deploy
```

Note: for now, this website doesn't have any database.

## Future development

### todo tasks
- In offline mode, the cv is not available. Fix this.
- Rewrite code in Typescript.
- Add a block "Favourite quotes":
  - "Functionality is an asset, code is a liability".
- Support translating to Dutch and French based on browser preference. Add links to switch languages.
- Fix html output reloading and not giving a "current page" style in Nav component.
- Page not found is no longer used - check how Gatsby handles routing and redirecting to 404.
- Add a privacy policy.
- Add a download link for my sample contract and explain I can also work with the client's contract if they don't want to use mine.
- Add JSDoc.
- End to end testing with [Cypress](https://www.gatsbyjs.org/docs/end-to-end-testing/)
- On Games page, add Pictologo
