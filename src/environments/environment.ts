const mainRoute = 'http://localhost:3000/';

const services = {
  apiUser: mainRoute + 'users',
  apiTask: mainRoute + 'tasks',
};

export const environment = {
  production: false,
  services,
};
