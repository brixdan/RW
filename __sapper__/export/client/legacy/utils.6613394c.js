function post(endpoint, data) {
  return fetch(endpoint, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }).then(function (r) {
    return r.json();
  });
}

export { post as p };
