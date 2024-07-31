const weakMap = new WeakMap();

const queryAPI = (endPoint) => {
  if (!weakMap.has(endPoint)) {
    weakMap.set(endPoint, 0);
  }

  const queries = weakMap.get(endPoint);

  weakMap.set(endPoint, queries + 1);

  if (queries >= 5) {
    throw new Error('Endpoint load is high');
  }
};

export { queryAPI, weakMap };
