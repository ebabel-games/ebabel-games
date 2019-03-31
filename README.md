# thomas-amar
Freelance React.js and Node.js Developer in Amsterdam - Contact Thomas Amar on +31 (0)6 21 80 98 99

## Development

### Pre-install
Your local environment relies on Node.js (https://nodejs.org) and Firebase:

```
npm install -g firebase-tools
```

Once installed, you may need to login if it's not already done:

```
firebase login
```

### Install and develop
During development, there are dev dependencies that should be installed.

```
npm install
```

The source of the code is at the root of the directory [index.html](index.html)

When running `npm run build` the source will be minified into [public/index.html](public/index.html)

### Run locally during development
Running locally will both build with `npm run build` and start a local server.

```
npm start
```

Browse to http://localhost:8080


## Deploy to Production

### Build the HTML (minify) that will be published.
```
npm run build
```

### Deploy only hosting
```
firebase deploy --only hosting
```

### Deploy both hosting files and database
```
firebase deploy
```

Note: for now, this website doesn't have any database.

## Future development

### todo tasks
- Use nano-react-app to make this website into a minimal React app, but [**isomorphic**](https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4)
- Turn this one page site into into a progressive web app, see Chrome Lighthouse.
- Add a block "Favourite quotes":
  - "Functionality is an asset, code is a liability"
- When clicking on Download CV, always download the file instead of opening it in browser? Is that a good idea?
- Support translating to Dutch based on browser preference
