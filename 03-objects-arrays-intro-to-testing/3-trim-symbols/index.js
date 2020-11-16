/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  switch (size) {
  case 0:
    return "";
  case undefined:
    return string;
  default:
    const strArr = string.split('');
    if (strArr.length == 0) {return string;}
    let count = 0;
    return strArr.reduce((accumValue, curValue) => {
      count = accumValue[accumValue.length - 1] === curValue ? ++count : 1;
      return count <= size ? accumValue + curValue : accumValue;
    }, '');
  }
}
