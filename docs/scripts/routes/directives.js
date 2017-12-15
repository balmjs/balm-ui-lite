const LazyLoad = () => import('../views/directives/lazy-load');

const directivesRoutes = [{
  path: 'lazy-load',
  name: 'directives.lazyLoad',
  component: LazyLoad
}];

export default directivesRoutes;
