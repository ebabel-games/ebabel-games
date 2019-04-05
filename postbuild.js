const fs = require('fs');
const { exec } = require('child_process');

const path = './build/200.html';

fs.unlink(path, () => {
  exec('react-snap');
});
