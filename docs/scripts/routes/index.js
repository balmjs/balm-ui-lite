import quickstartRoutes from './quickstart';
import foundationRoutes from './foundation';
import layoutRoutes from './layout';
import commonRoutes from './common';
import formRoutes from './form';
import dataRoutes from './data';
import popupRoutes from './popup';

import Home from '../views/home';
import Test from '../views/test';

const baseRoutes = [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'BalmUI - Home',
      keywords: '',
      description: ''
    }
  }, {
    path: '/test',
    name: 'test',
    component: Test,
  }
];

const routes = baseRoutes.concat(quickstartRoutes, foundationRoutes, layoutRoutes, commonRoutes, formRoutes, dataRoutes, popupRoutes);

export default routes;
