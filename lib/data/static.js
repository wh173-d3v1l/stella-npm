const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function static_remove_bg(color) {
  var sdn = 'RUN git clone https://github.com/riz4d/stella /root/stella' + '\n'
  exec('sed -n 3p /root/stella/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var ttl = color.toLowerCase() 
  var data = 'chromakey=' + ttl
  return data;
}
module.exports = static_remove_bg
