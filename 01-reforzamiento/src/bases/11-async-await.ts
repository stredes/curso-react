import type { GiphyRandomResponse } from "../data/giphy.response";
const API_KEY = "Rftga7vIF3CN0RBcY6HXIMDrWQ0oPnas"; // Define la API Key de Giphy

const myRequest = fetch(
`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`, // Realiza una petición HTTP a la API de Giphy
);

const createImagenInsideDom = (url: string) => {
  const imagElement = document.createElement("img");
  imagElement.src = url;

  document.body.append(imagElement);
};
// Procesa la respuesta de la petición
myRequest
  .then((response) => response.json()) // Convierte la respuesta recibida a formato JSON
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImagenInsideDom(imageUrl);
  })
  .catch((err) => {
    console.log(err); // Muestra en consola cualquier error producido en la petición
  });

 
