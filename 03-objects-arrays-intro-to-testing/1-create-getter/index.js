/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const dir = path.split(".");
  return obj => {
    let dirPath = obj;
    for (path of dir) {
      dirPath = dirPath ? dirPath[path] : undefined;
    }
    return dirPath;
  };
}
