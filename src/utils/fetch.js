import { fetchApi } from 'lib/axios';

export const login = async (user) =>
  await fetchApi('auth/login', 'post', user, {
    headers: { Authorization: '' },
  });

export const getTodoList = async () => await fetchApi('todos', 'get');

export const manageTodoItems = async (todoId, method, payload, itemId) => {
  const url = itemId
    ? `todos/${todoId}/items/${itemId}`
    : `todos/${todoId}/items`;

  return await fetchApi(url, method, payload);
};
