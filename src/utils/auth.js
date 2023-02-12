// const baseURL =
//   process.env.NODE_ENV === "production"
//     ? "https://api.example.com"
//     : "http://localhost:3000";

// const baseURL = "https://api.hubapi.com/crm/v3/objects/contacts";
// const REACT_APP_HUBSPOT_API_KEY =
//   "pat-eu1-7ecaefe1-792a-42db-81ff-386f0224ad9b";

const baseURL = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

const register = (email, password, name, surname, phone, typeofuser) => {
  return request(`${baseURL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
      surname,
      phone,
      typeofuser: "user",
    }),
  });
};

const login = (email, password) => {
  return request(`${baseURL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

const authorize = (token) => {
  return request(`${baseURL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export { register, login, authorize };
