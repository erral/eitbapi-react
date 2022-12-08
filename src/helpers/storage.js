const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const removeStorage = (key) => {
  localStorage.remove(key);
};

export { setStorage, getStorage, removeStorage };
