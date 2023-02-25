const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.maiteapp.students.nomoredomainssbs.ru"
    : "http://localhost:3001";

// const baseURL = "http://localhost:3001";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
}

function request(url, options) {
  console.log("request", url, options);
  return fetch(url, options).then(checkResponse);
}

const register = (email, password, name, surname, phone, typeofuser) => {
  return request(`${baseURL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
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
  console.log("authorize", token);
  return request(`${baseURL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export { register, login, authorize, request };
