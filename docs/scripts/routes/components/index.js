import commonRoutes from './common';
import dataview from './dataview';
import feedbackRoutes from './feedback';

const componentsRoutes = [].concat(commonRoutes, dataview, feedbackRoutes);

export default componentsRoutes;
