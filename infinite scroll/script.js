const imageContainer = document.querySelector(".images-container");
const loader = document.querySelector(".loader");
let loading = true;
let page = 1;

const loadImages = async () => {
  try {
    let data = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );
    data = await data.json();
    for (let i = 0; i < data.length; i++) {
      const img = document.createElement("img");
      img.src = `${data[i].download_url}`;
      imageContainer.appendChild(img);
    }
    page += 1;
  } catch (err) {
    console.log(err);
  } finally {
    loading = false;
    loader.style.display = "none";
  }
};

loadImages();

document.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
    loading = true;
    loader.style.display = "block";
    loadImages();
  }
});
