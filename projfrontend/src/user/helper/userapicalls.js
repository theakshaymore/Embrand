import { API } from "../../backend";

export const getMyOrders = (userId, token) => {
  return fetch(`${API}/orders/user/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
