const fs = require('fs');
const { exec } = require('child_process');

const paths = [
  './build/200.html',
];

paths.map((path, index) => {
  fs.unlink(path, () => {
    if (index === paths.length - 1) {
      exec('react-snap');
    }
  });
});
