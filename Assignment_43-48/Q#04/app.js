let image = document.querySelector("img");

image.onmouseover = () => {
  image.src = "./img/samsung.jpeg";
};

image.onmouseout = () => {
  image.src = "./img/iphone.jpeg";
};
