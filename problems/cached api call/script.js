const generateKey = (path, config) => {
  const key = Object.keys(config)
    .sort((a, b) => a.localeCompare(b))
    .map((k) => k + ":" + config[k].toString())
    .join("&");
  return path + key;
};

const makeApiCall = async (path, config) => {
  try {
    let data = await fetch(path, config);
    data = data.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const cachedApiCall = (time) => {
  let cache = {};
  return async (path, config = {}) => {
    let key = generateKey(path, config);
    let element = cache[key];
    if (!element || Date.now() > element.expiryTime) {
      console.log("Making api call");
      try {
        let response = await makeApiCall(path, fetch);
        cache[key] = {
          value: response,
          expiryTime: Date.now() + time,
        };
      } catch (err) {
        console.log(err);
      }
    }
    return cache[key].value;
  };
};

const cachedCall = cachedApiCall(3000);

cachedCall("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log(a)
);
setTimeout(
  () =>
    cachedCall("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
      console.log(a)
    ),
  1000
);

setTimeout(
  () =>
    cachedCall("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
      console.log(a)
    ),
  2000
);
setTimeout(
  () =>
    cachedCall("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
      console.log(a)
    ),
  3500
);
