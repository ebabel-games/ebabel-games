# [ebabel.eu](https://ebabel.eu)
React.js and Node.js Freelancer in Amsterdam - Contact Thomas Amar on +31 (0)6 21 80 98 99

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

If you are in a cloud virtual machine, you might need to run a different login command, and when on another device you have authenticated, paste back into virtual machine the authorozation token:

```
firebase login --no-localhost
```

### Install and develop
During development, there are dev dependencies that should be installed.

```
npm install
```

- `npm start` — This will spawn a development server with a default port of `1234`.
- `npm run build` — This will output a production build in the `build` directory.

### Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- -p 3000
```

Or edit the `start` script directly:

```
parcel index.html -p 3000
```

### Babel transforms

The Babel preset [babel-preset-nano-react-app](https://github.com/adrianmcli/babel-preset-nano-react-app) and a small amount of configuration is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an external `.babelrc` file, so if you want to use `.babelrc` remember to delete the `babel` property inside `package.json`.


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
- Fix the footer: it's correct on the homepage but on the other pages it's missing the link to Pictologo privacy page?
- Add unit tests with Jest.
- Turn this site into a progressive web app, offline included (see Chrome Lighthouse audits).
- Add a block "Favourite quotes":
  - "Functionality is an asset, code is a liability".
- Support translating to Dutch and French based on browser preference.
- Adapt the newsletter signup css further to better match the site style and pass the audits.
- Update page header title for history.
- Improve structure of src folder.
