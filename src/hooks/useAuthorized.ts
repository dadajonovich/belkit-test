export const useAuthorized = () => {
  const isAuthorized = localStorage.getItem('token') !== null;
  const removeAuthorized = () => localStorage.removeItem('token');

  return [isAuthorized, removeAuthorized] as const;
};
