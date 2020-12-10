const login = (user, password) => {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, password }),
  };
  return fetch('https://yourapi/login', req).then((res) =>
    res
      .json()
      .then((json) => {
        localStorage.setItem('token', JSON.stringify(json.token));
        return json;
      })
      .catch((error) => {
        throw error;
      })
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
};
