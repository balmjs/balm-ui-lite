import layoutRoutes from './layout';
import commonRoutes from './common';
import dataview from './dataview';
import feedbackRoutes from './feedback';

const componentsRoutes = [].concat(layoutRoutes, commonRoutes, dataview, feedbackRoutes);

export default componentsRoutes;
