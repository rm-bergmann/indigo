import each from 'lodash/each';

const setLocalStorage = localStorage => {
  each(localStorage, (value, key) => {
    window.localStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value,
    );
  });
};

export default setLocalStorage;
