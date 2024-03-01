export const createHeaders = (isFormData: boolean = false) => {
  const token = localStorage.getItem('token');
  const headers: Record<string, string> = { Accept: 'application/json' };

  if (isFormData) {
    headers['Content-Type'] = 'multipart/form-data';
  } else {
    headers['Content-Type'] = 'application/json';
  }

  if (token !== null) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  console.log(headers);

  return headers;
};
