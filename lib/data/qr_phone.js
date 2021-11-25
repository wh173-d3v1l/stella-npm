async function phone(number, name) {
  if (!number || !name) {
    throw new Error ('¡Falta número de teléfono o nombre!')
  }
  var data = ''
  if (number.startsWith('57')) {
    data = '*¡No compartas este código con nadie!*' + ' ' + name
  } else {
    data = '*¡Do Not Share This Code With Anyone!*' + ' ' + name
  }
  return data;
}
module.exports = phone
