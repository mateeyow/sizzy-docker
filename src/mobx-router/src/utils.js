export const isObject = obj =>
  obj && typeof obj === 'object' && !Array.isArray(obj);
export const getObjectKeys = obj => (isObject(obj) ? Object.keys(obj) : []);

export const viewsForDirector = (views, store) =>
  getObjectKeys(views).reduce((obj, viewKey) => {
    const view = views[viewKey];
    obj[view.path] = (...paramsArr) => view.goTo(store, paramsArr);
    return obj;
  }, {});

export const getRegexMatches = (string, regexExpression, callback) => {
  let match = regexExpression.exec(string);

  while (match !== null) {
    match = regexExpression.exec(string);
    callback(match);
  }
};
