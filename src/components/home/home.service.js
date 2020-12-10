const getUsers = () => {
  const req = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authentication: localStorage.getItem('token'),
    },
  };
  return fetch('https://yourapi', req).then((res) =>
    res
      .json()
      .then((json) => {
        return json;
      })
      .catch((error) => {
        throw error;
      })
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers,
};
