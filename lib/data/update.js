const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function update(Language) {
  var sdn = 'RUN git clone https://github.com/riz4d/stella /root/stella' + '\n'
  exec('sed -n 3p /root/stella/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  if (Language == 'TR') { data = '```Güncellemek İçin``` */update now* ```Yazın.``` \n\n'
  } else if (Language == 'AZ') { data = '```stella Yeniləmək üçün``` */update now* \n\n'
  } else if (Language == 'EN') { data = '```To Update stella``` use */update now* \n\n'
  } else if (Language == 'RU') { data = '```Чтобы обновить stella, используйте``` */update now* \n\n'
  } else if (Language == 'HI') { data = '```stella को अपडेट करने के लिए``` */update now* ```का उपयोग करें``` \n\n'
  } else if (Language == 'ML') { data = '```stella അപ്‌ഡേറ്റ് ചെയ്യുന്നതിന്``` */update now* ```ഉപയോഗിക്കുക```'
  } else if (Language == 'ES') { data = '```Para actualizar DrkBot use``` */update now* \n\n'
  } else if (Language == 'PT') { data = '```Para atualizar o stella, use``` */update now* \n\n'
  } else if (Language == 'ID') { data = '```Untuk Memperbarui stella gunakan``` */update now* \n\n'
  }
  return data;
}
module.exports = update
