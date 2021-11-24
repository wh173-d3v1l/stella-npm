const exec = require('child_process').exec;
const os = require("os");
const axios = require('axios');
async function announcement_start_im(language) {
  var sdn = 'RUN git clone https://github.com/https://github.com/riz4d/stella /root/stella' + '\n'
  exec('sed -n 3p /root/stella/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  await axios.get('https://gist.github.com/riz4d/d503922c0d0fd4711ba2ee381c43cea4/raw/').then(async (ann) => {
    data = ann.data.image
  })
  return data;
}
module.exports = announcement_start_im
