type HeadersCreationOptions = {
  isFormData?: boolean;
  responceFile?: boolean;
};

export const createHeaders = (options: HeadersCreationOptions = {}) => {
  const { isFormData, responceFile } = options;

  const token = localStorage.getItem('token');
  const headers: Record<string, string> = {};

  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  if (!responceFile) {
    headers['Accept'] = 'application/json';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};
