# thomas-amar
Freelance React.js and Node.js Developer in Amsterdam - Contact Thomas Amar on +31 (0)6 21 80 98 99

## Run locally during development
```
http-server public/
```

Browse to http://localhost:8080

## Pre-install
Your local environment relies on Node.js (https://nodejs.org) and Firebase:

```
npm install -g firebase-tools
```

Once installed, you may need to login if it's not already done:

```
firebase login
```

## Deploy to Production

### Deploy only hosting
```
firebase deploy --only hosting
```

### Deploy both hosting files and database
```
firebase deploy
```
