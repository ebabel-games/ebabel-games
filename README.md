# thomas-amar
Freelance React.js and Node.js Developer in Amsterdam - Contact Thomas Amar on +31 (0)6 21 80 98 99

## Development

## Pre-install
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
```
npm start
```

Browse to http://localhost:8080


## Deploy to Production

### Deploy only hosting
```
firebase deploy --only hosting
```

### Deploy both hosting files and database
```
firebase deploy
```

Note: for now, this website doesn't have any database.
