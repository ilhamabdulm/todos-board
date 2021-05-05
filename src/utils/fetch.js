import { fetchApi } from 'lib/axios';

export const login = async (user) =>
  await fetchApi('auth/login', 'post', user, {
    headers: { Authorization: '' },
  });

export const getTodoList = async () => await fetchApi('todos', 'get');

export const manageTodoItems = async (todoId, method, payload) =>
  await fetchApi(`todos/${todoId}/items`, method, payload);
