export const debounce = (fn, delay) => {

  let timer;

  return function () {
    const context = this;
    const args = arguments;
    //clear Timer if it is already set
    clearTimeout(timer);
    //set timer
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };

};
