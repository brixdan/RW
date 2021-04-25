function post(endpoint, data) {
    return fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:7000/'
        }
    }).then(r => r.json());
}

export { post as p };
