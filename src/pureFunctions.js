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

export const getDetailData = async (url = '', token, { id }) => {
  console.log(id);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
  return response.json();
};

export const deleteDetailData = async (url = '', token, { id }) => {
  console.log(id);
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
};

export const changePhoto = async (url = '', token, data = {}) => {
  const body = data.payload.fd;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token
    },
    body
  });
};

export const searchData = async (url = '', token) => {
  console.log(token);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
  return response.json();
};

export const shareDetailData = async (url = '', token, { photoId }) => {
  const photoArr = [];
  photoArr.push(+photoId);
  const body = JSON.stringify({ photos: photoArr });
  console.log(body);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-type': 'application/json'
    },
    body
  });
  return response.json();
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
