import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "Rftga7vIF3CN0RBcY6HXIMDrWQ0oPnas"; // Define la API Key de Giphy

const createImagenInsideDom = (url: string) => {
  const imagElement = document.createElement("img");
  imagElement.src = url;

  document.body.append(imagElement);
};

const getRandomGifUrl = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`, // Realiza una petición HTTP a la API de Giphy
  );
  const { data }: GiphyRandomResponse = await response.json();
  return data.images.original.url;
};

getRandomGifUrl().then((url) => createImagenInsideDom(url));