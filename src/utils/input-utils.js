export const onEnter = cb => ({
  onKeyPress: e => {
    const {key, target: {value}, shiftKey} = e;
    if (key === 'Enter' && !shiftKey) {
      e.preventDefault();
      cb(value);
    }
  }
});
