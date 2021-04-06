export const random = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const postData = async (url = '', headers = {}, data = {}) => {
  let body = null;
  if (headers['Content-type'] === 'FormData') {
    console.log(data.payload.photo);
    const newPhoto = new FormData(data.payload.photo);
    body = { photo: newPhoto };
  } else if (headers['Content-type'] === 'application/json') {
    body = JSON.stringify(data.payload);
  }
  console.log(body);
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body,
  });
  return response.json();
};

export const sortNumbers = (a, b) => {
  return b - a;
};
