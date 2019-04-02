# ebabel.eu
Freelance React.js and Node.js Developer in Amsterdam - Contact Thomas Amar on +31 (0)6 21 80 98 99

## Development

### Pre-install
Your local environment relies on Node.js (https://nodejs.org), Firebase, and nano-react-app:

```
npm install -g firebase-tools nano-react-app
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

- `npm start` — This will spawn a development server with a default port of `1234`.
- `npm run build` — This will output a production build in the `dist` directory.

### Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- -p 3000
```

Or edit the `start` script directly:

```
parcel index.html -p 3000
```

### Adding styles

You can use CSS files with simple ES2015 `import` statements in your Javascript:

```js
import "./index.css";
```

### Babel transforms

The Babel preset [babel-preset-nano-react-app](https://github.com/adrianmcli/babel-preset-nano-react-app) and a small amount of configuration is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an external `.babelrc` file, so if you want to use `.babelrc` remember to delete the `babel` property inside `package.json`.


## Deployment

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
- Use nano-react-app to make this website into a minimal React app.
- Add unit tests with Jest.
- Turn this site into a progressive web app, offline included (see Chrome Lighthouse audits).
- Add a block "Favourite quotes":
  - "Functionality is an asset, code is a liability"
- When clicking on Download CV, always download the file instead of opening it in browser? Is that a good idea?
- Support translating to Dutch based on browser preference
