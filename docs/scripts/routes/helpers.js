const Typeof = () => import('../views/helpers/typeof');
const DetectIE = () => import('../views/helpers/detect-ie');
const Utils = () => import('../views/helpers/utils');

const helpersRoutes = [{
  path: 'typeof',
  name: 'helpers.typeof',
  component: Typeof
}, {
  path: 'detect-ie',
  name: 'helpers.detect-ie',
  component: DetectIE
}, {
  path: 'other-fn',
  name: 'helpers.other-fn',
  component: Utils
}];

export default helpersRoutes;
