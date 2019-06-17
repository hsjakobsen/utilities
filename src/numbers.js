function parseLocaleNumber(stringNumber) {
  var stringNumberToProcess = numberWithCommas(stringNumber);
  var thousandSeparator = (1111).toLocaleString().replace(/1/g, '');
  var decimalSeparator = (1.1).toLocaleString().replace(/1/g, '');

  return stringNumberToProcess
    .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
    .replace(new RegExp('\\' + decimalSeparator), '.');
}

function numberWithCommas(x) {
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

module.exports = {
  parseLocaleNumber: parseLocaleNumber,
  numberWithCommas: numberWithCommas,
};
