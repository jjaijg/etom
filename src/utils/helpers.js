export const iterateNestedObj = (obj, keyToGet) => {
  const res = [];
  function recurse(obj, current) {
    for (const key in obj) {
      let value = obj[key];
      if (value !== undefined) {
        if (value && typeof value === 'object') {
          recurse(value, key);
        } else {
          if (key === keyToGet) res.push(value);
        }
      }
    }
  }
  recurse(obj);
  return res;
};
