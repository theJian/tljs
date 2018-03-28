import a from './a.js';

export default (values = {}) => {
  return a({
    ...values,
    require: path => require(path).default,
  });
};
