const Intro = () => import('../views/guide/intro');
const Quickstart = () => import('../views/guide/quickstart');

const guideRoutes = [{
  path: 'intro',
  name: 'guide.intro',
  component: Intro
}, {
  path: 'quickstart',
  name: 'guide.quickstart',
  component: Quickstart
}];

export default guideRoutes;
