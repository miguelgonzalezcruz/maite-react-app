import { request } from "./auth";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.maiteapp.students.nomoredomainssbs.ru"
    : "http://localhost:3001";

// const baseURL = "http://localhost:3001";

const getItemsFromList = () => {
  return request(`${baseURL}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const addItemsToList = (name, imageUrl, weather) => {
  return request(`${baseURL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify(name, imageUrl, weather),
  });
};

const removeItemsFromList = (cardId) => {
  return request(`${baseURL}/items/${cardId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

const bookItem = (id) => {
  return request(`${baseURL}/items/${id}/book`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

const cancelBookItem = (id) => {
  return request(`${baseURL}/items/${id}/book`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};

export {
  getItemsFromList,
  addItemsToList,
  removeItemsFromList,
  bookItem,
  cancelBookItem,
};
