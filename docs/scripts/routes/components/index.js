import layoutRoutes from './layout';
import commonRoutes from './common';
import formRoutes from './form';
import dataviewRoutes from './dataview';
import feedbackRoutes from './feedback';
import loadingRoutes from './loading';

const componentsRoutes = [].concat(layoutRoutes, commonRoutes, formRoutes, dataviewRoutes, feedbackRoutes, loadingRoutes);

export default componentsRoutes;
