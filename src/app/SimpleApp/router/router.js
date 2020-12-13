import { Router } from '@vaadin/router';

export const router = outlet => {
  const routerInstance = new Router(outlet);
  routerInstance.setRoutes([
    {
      path: '/my-activity',
      action: async () => {
        await import('../../../pages/MyActivityPage/my-activity-page.js');
      },
      component: 'my-activity-page',
    },
    { path: '/', component: 'login-page' },
    { path: '(.*)', component: 'login-page' },
  ]);
};

export const navigate = page => {
  Router.go(`/${page}`);
};
