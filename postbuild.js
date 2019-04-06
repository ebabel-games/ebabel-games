const fs = require('fs');
const { exec } = require('child_process');

// Warning: Windows won't build for deployment. See https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-windows

// Remove the 200.html file because it can cause issues with react-snap.
fs.unlink('./build/200.html', (err) => {
  if (err) {
    console.error(err);
  }

  exec('node ./node_modules/.bin/react-snap', (err) => {
    console.error(err);
  });
});
