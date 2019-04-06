const fs = require('fs');
const { exec } = require('child_process');

const paths = [
  './build/200.html',
];

paths.map((path, index) => {
  // Remove the 200.html file because it can cause issues with react-snap.
  fs.unlink(path, () => {
    if (index === paths.length - 1) {
      exec('react-snap');
    }
  });
});
