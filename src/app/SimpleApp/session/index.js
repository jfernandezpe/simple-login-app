const session = {};

export const setToken = token => {
  session.token = token;
};
export const getToken = () => session.token;
