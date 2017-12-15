import layoutRoutes from './layout';
import commonRoutes from './common';
import dataviewRoutes from './dataview';
import feedbackRoutes from './feedback';
import loadingRoutes from './loading';

const componentsRoutes = [].concat(layoutRoutes, commonRoutes, dataviewRoutes, feedbackRoutes, loadingRoutes);

export default componentsRoutes;
