const likeTheVideo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Liked the video"), 1000);
  });
};

const subscribeTheChannel = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Didn't Subscribed!!!!"), 1000);
  });
};

const shareTheVideo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Shared the video"), 1000);
  });
};

const recursiveSolve = async (promises) => {
  if (promises.length === 0) return;
  let currentPromise = promises.shift();
  try {
    let res = await currentPromise;
    console.log(res);
  } catch (err) {
    console.log("Error: ", err);
  }
  recursiveSolve(promises);
};

recursiveSolve([likeTheVideo(), subscribeTheChannel(), shareTheVideo()]);
