// import { API } from "../../backend";

const API = "https://embrand.vercel.app/api/";

export const getProducts = () => {
  return fetch(`${API}/products`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSingleProduct = (productId) => {
  return fetch(`${API}/product/${productId}`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
