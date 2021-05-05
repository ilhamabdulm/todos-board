export const setAuthToken = (value) => {
  localStorage.setItem('auth_token', value);
};

export const getAuthToken = () => {
  const parsed = localStorage.getItem('auth_token') || '';

  return parsed || '';
};
