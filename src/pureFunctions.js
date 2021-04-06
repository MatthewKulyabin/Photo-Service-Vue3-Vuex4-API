export const postData = async (url = '', headers = {}, data = {}) => {
  const body = JSON.stringify(data.payload);
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body
  });
  return response.json();
};

export const postPhoto = async (url = '', token, data = {}) => {
  const body = data.payload.fd;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token
    },
    body
  });
  return response.json();
};

export const getData = async (url = '', token) => {
  console.log(token);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
  return response.json();
};

export const changePhoto = async (url = '', token, payload) => {
  console.log(url);
  console.log(token);
  console.log(payload);
  body._method = 'patch';
  body.name = payload.name;
  body.photo = payload.photo;
  const response = await fetch(url, {
    method: 'POST'
  });
};

export const inLocalStorage = (name, data = null) => {
  if (localStorage.getItem(name)) {
    console.log(localStorage.getItem(name));
    return localStorage.getItem(name);
  }
  localStorage.setItem(name, data);
};

export const outLocalStorage = name => {
  localStorage.setItem(name, '');
};
