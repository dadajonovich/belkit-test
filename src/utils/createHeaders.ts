export const createHeaders = () => {
  const token = localStorage.getItem('token');
  if (token !== null) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }
};
