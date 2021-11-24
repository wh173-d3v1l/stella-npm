const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function worktype(type, Language) {
  var sdn = 'RUN git clone https://github.com/riz4d/stella /root/stella' + '\n'
  exec('sed -n 3p /root/stella/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  if (!type || !Language) { throw new Error ('Missing Worktype!!') }
  var data = ''
  if (type == 'private') {
    if (Language == 'TR') {
      data = "*stella Private Olarak Çalışıyor! 🤖*\n\n" +
        "_Lütfen burada plugin denemesi yapmayın. Burası sizin LOG numaranızdır._\n" +
        "_Herhangi bir sohbette komutları deneyebilirsiniz :)_\n\n" +
        "*Botunuz sadece size özel olarak çalışmaktadır. Değiştirmek için* _/setvar WORK_TYPE:public_ *komutunu kullanın.*\n\n" +
        "*stella Kullandığın İçin Teşekkürler 💌*"
    } else if (Language == 'EN') {
      data = "*stella Working as Private! 🤖*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n*Your bot working as private. To change it, use* _/setvar WORK_TYPE:public_\n\n*Thanks for using stella 💌*"
    } else if (Language == 'AZ') {
      data = "*stella Şəxsi olaraq işləyir! 🤖*\n\n_Zəhmət olmasa burada plaginləri sınamayın. Bu sizin LOG nömrənizdir._\n_İstənilən söhbət üçün əmrləri sınaya bilərsiniz :)_\n\n*Şəxsi olaraq işləmirsən. Dəyişdirmək üçün istifadə edin:* _/setvar WORK_TYPE:public_\n\n*stella istifadə etdiyiniz üçün təşəkkürlər. 💌*"
    } else if (Language == 'RU') {
      data = "*stella работает как частное лицо! 🤖*\n\n_Пожалуйста, не пробуйте здесь плагины. Это ваш номер ЖУРНАЛА._\n_Вы можете попробовать команды в любой чат :)_\n\n*Вы не работаете как частный. Чтобы изменить это, используйте:* _/setvar WORK_TYPE:public_\n\n*Спасибо за использование Stella 💌*"
    } else if (Language == 'ML') {
      data = "*stella സ്വകാര്യമായി പ്രവർത്തിക്കുന്നു! 🤖*\n\n_ദയവായി ഇവിടെ പ്ലഗിനുകൾ പരീക്ഷിക്കരുത്. ഇത് നിങ്ങളുടെ LOG നമ്പർ ആണ്._\n_ഏത് ചാറ്റിലേക്കും നിങ്ങൾക്ക് കമാൻഡുകൾ പരീക്ഷിക്കാം :)_\n\n*നിങ്ങൾ സ്വകാര്യമായി പ്രവർത്തിക്കുന്നില്ല. അത് മാറ്റാൻ, ഉപയോഗിക്കുക:* _/setvar WORK_TYPE:public_\n\n*stella ഉപയോഗിച്ചതിന് നന്ദി 💌*"
    } else if (Language == 'HI') {
      data = "*stella निजी के रूप में काम कर रहा है! 🤖*\n\n_कृपया यहां प्लगइन्स का प्रयास न करें। यह आपका लॉग नंबर है।_\n_आप किसी भी चैट के लिए कमांड आज़मा सकते हैं :)_\n\n*आप निजी के रूप में काम नहीं कर रहे हैं। इसे बदलने के लिए, उपयोग करें:* _/setvar WORK_TYPE:public_\n\n*stella का उपयोग करने के लिए धन्यवाद 💌*"
    } else if (Language == 'ID') {
      data = "*stella Bekerja sebagai Swasta! 🤖*\n\n_Tolong jangan coba plugin di sini. Ini adalah nomor LOG Anda._\n_Anda dapat mencoba perintah ke obrolan apa pun :)_\n\n*Anda tidak bekerja sebagai pribadi. Untuk mengubahnya, gunakan:* _/setvar WORK_TYPE:public_\n\n*Terima kasih telah menggunakan Stella 💌*"
    } else if (Language == 'ES') {
      data = "*stella funciona en modo publico 🤖*\n\n_No probar los comandos aca. Este es tu espacio de LOG._\n_Puedes probar los comandos en cualquier chat._\n\n*stella esta funcionando en modo public. Use el comando* _/setvar WORK_TYPE:private_ *para cambiarlo a modo privado.*\n\n*Gracias por usar stella 💌*"
    } else if (Language == 'PT') {
      data = "*stella trabalhando como privado! 🤖*\n\n_Não tente plug-ins aqui. Este é o seu número de LOG._\n_Você pode tentar comandos para qualquer bate-papo :)_\n\n*Você não está trabalhando como privado. Para mudar isso, use:* _/setvar WORK_TYPE:public_\n\n*Obrigado por usar o Stella 💌*"
    }
  } else if (type == 'public') {
    if (Language == 'TR') {
      data = "*stella Public Olarak Çalışıyor! 🤖*\n\n" +
        "_Lütfen burada plugin denemesi yapmayın. Burası sizin LOG numaranızdır._\n" +
        "_Herhangi bir sohbette komutları deneyebilirsiniz :)_\n\n" +
        "*Botunuz herkese açık olarak çalışmaktadır. Bazı komutları kullanamazsınız. Değiştirmek için* _/setvar WORK_TYPE:private_ *komutunu kullanın.*\n\n" +
        "*stella Kullandığın İçin Teşekkürler 💌*"
    } else if (Language == 'EN') {
      data = "*stella Working as Public! 🤖*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n*Your bot working as public. To change it, use* _/setvar WORK_TYPE:private_\n\n*Thanks for using stella 💌*"
    } else if (Language == 'AZ') {
      data = "*stella İctimai olaraq işləyir! 🤖*\n\n_Zəhmət olmasa burada plaginləri sınamayın. Bu sizin LOG nömrənizdir._\n_İstənilən söhbət üçün əmrləri sınaya bilərsiniz :)_\n\n*İctimai olaraq işləmirsiniz. İstifadə edə bilmədiyiniz bəzi əmrlər. Dəyişdirmək üçün istifadə edin:* _/setvar WORK_TYPE:private_\n\n*stella istifadə etdiyiniz üçün təşəkkürlər. 💌*"
    } else if (Language == 'RU') {
      data = "*stella работает как общественная! 🤖*\n\n_Пожалуйста, не пробуйте здесь плагины. Это ваш номер ЖУРНАЛА._\n_Вы можете попробовать команды в любой чат :)_\n\n*Вы не работаете публично. Некоторые команды нельзя использовать. Чтобы изменить это, используйте:* _/setvar WORK_TYPE:private_\n\n*Спасибо за использование Stella 💌*"
    } else if (Language == 'ML') {
      data = "*stella പൊതുവായി പ്രവർത്തിക്കുന്നു! 🤖*\n\n_ദയവായി ഇവിടെ പ്ലഗിനുകൾ പരീക്ഷിക്കരുത്. ഇത് നിങ്ങളുടെ LOG നമ്പർ ആണ്._\n_ഏത് ചാറ്റിലേക്കും നിങ്ങൾക്ക് കമാൻഡുകൾ പരീക്ഷിക്കാം :)_\n\n*നിങ്ങൾ പൊതുവായി പ്രവർത്തിക്കുന്നില്ല. നിങ്ങൾക്ക് ഉപയോഗിക്കാൻ കഴിയാത്ത ചില കമാൻഡുകൾ. അത് മാറ്റാൻ, ഉപയോഗിക്കുക:* _/setvar WORK_TYPE:private_\n\n*stella ഉപയോഗിച്ചതിന് നന്ദി 💌*"
    } else if (Language == 'HI') {
      data = "*stella जनता के रूप में काम कर रहा है! 🤖*\n\n_कृपया यहां प्लगइन्स का प्रयास न करें। यह आपका लॉग नंबर है।_\n_आप किसी भी चैट के लिए कमांड आज़मा सकते हैं :)_\n\n*आप जनता के रूप में काम नहीं कर रहे हैं। कुछ कमांड जिनका आप उपयोग नहीं कर सकते हैं। इसे बदलने के लिए, उपयोग करें:* _/setvar WORK_TYPE:private_\n\n*stella का उपयोग करने के लिए धन्यवाद 💌*"
    } else if (Language == 'ID') {
      data = "*stella Bekerja sebagai Publik! 🤖*\n\n_Tolong jangan coba plugin di sini. Ini adalah nomor LOG Anda._\n_Anda dapat mencoba perintah ke obrolan apa pun :)_\n\n*Anda tidak bekerja sebagai publik. Beberapa perintah yang tidak dapat Anda gunakan. Untuk mengubahnya, gunakan:* _/setvar WORK_TYPE:private_\n\n*Terima kasih telah menggunakan Stella 💌*"
    } else if (Language == 'ES') {
      data = "*stella funciona en modo privado 🤖*\n\n_No probar los comandos aca. Este es tu espacio de LOG._\n_Puedes probar los comandos en cualquier chat._\n\n*stella esta funcionando en modo private. Use el comando* _/setvar WORK_TYPE:public_ *para cambiarlo a modo publico.*\n\n*Gracias por usar stella 💌*"
    } else if (Language == 'PT') {
      data = "*stella trabalhando como público! 🤖*\n\n_Não tente plug-ins aqui. Este é o seu número de LOG._\n_Você pode tentar comandos para qualquer bate-papo :)_\n\n*Você não está trabalhando como público. Alguns comandos você não pode usar. Para mudar isso, use:* _/setvar WORK_TYPE:private_\n\n*Obrigado por usar o Stella 💌*"
    }
  } else {
    if (Language == 'TR') { data = '_Girdiğin_ *WORK_TYPE* _Anahtarı Bulunamadı!_ \n_Lütfen_ ```/setvar WORK_TYPE:private``` _Yada_ ```/setvar WORK_TYPE:public``` _Komutunu Kullanın!_' 
    } else if (Language == 'AZ') { data = '_Daxil etdiyiniz_ *WORK_TYPE* _Açarı Tapılmadı!_ \n_Zəhmət olmasa_ ```/setvar WORK_TYPE:private``` _və ya_ ```/setvar WORK_TYPE:public``` _yazın._'
    } else if (Language == 'EN') { data = '_The_ *WORK_TYPE* _Key You Entered Was Not Found!_ \n_Please Type_ ```/setvar WORK_TYPE:private``` _Or_ ```/setvar WORK_TYPE:public```'
    } else if (Language == 'RU') { data = '_Введенный вами ключ_ *WORK_TYP* _не найден!_ \n_Введите_ ```/setvar WORK_TYPE:private``` или ```/setvar WORK_TYPE:public```'
    } else if (Language == 'ML') { data = '_നിങ്ങൾ നൽകിയ_ *WORK_TYPE* _കീ കണ്ടെത്തിയില്ല!_ \n_ദയവായി_ ```/setvar WORK_TYPE:private``` _അല്ലെങ്കിൽ_ ```/setvar WORK_TYPE:public``` _എന്ന് ടൈപ്പ് ചെയ്യുക_'
    } else if (Language == 'HI') { data = '_आपके द्वारा दर्ज की गई_ *WORK_TYPE* _कुंजी नहीं मिली!_ \n_कृपया टाइप करें_ ```/setvar WORK_TYPE:private``` या ```/setvar WORK_TYPE:public```'
    } else if (Language == 'ID') { data = '_Kunci_ *WORK_TYPE* _yang Anda Masukkan Tidak Ditemukan!_ \n_Silakan Ketik_ ```/setvar WORK_TYPE:private``` _Atau_ ```/setvar WORK_TYPE:public```'
    } else if (Language == 'PT') { data = '_A chave_ *WORK_TYPE* _que você digitou não foi encontrada!_ \n_Digite_ ```/setvar WORK_TYPE:private``` _ou_ ```/setvar WORK_TYPE:public```'
    } else if (Language == 'ES') { data = '_¡No se encontró la clave_ *WORK_TYPE* _que ingresó!_ \n_Escriba_ ```/setvar WORK_TYPE:private``` _o_ ```/setvar WORK_TYPE:public```'
    }
  }
  return data;
}
module.exports = worktype;
