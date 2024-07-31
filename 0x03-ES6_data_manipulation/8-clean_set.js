const cleanSet = (set, startString) => {
  const Arr = [];

  if (startString && startString.length > 0) {
    for (const item of set) {
      if (typeof item === 'string' && item.startsWith(startString)) {
        Arr.push(item.substring(startString.length));
      }
    }
  }

  return Arr.join('-');
};

export default cleanSet;
