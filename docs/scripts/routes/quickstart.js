const Requirement = () => import('../views/quickstart/requirement');
const Installation = () => import('../views/quickstart/installation');
const Advanced = () => import('../views/quickstart/advanced');
const KillIE = () => import('../views/quickstart/kill-ie');

const foundationRoutes = [{
  path: '/requirement',
  name: 'requirement',
  component: Requirement,
  meta: {
    title: 'BalmUI - Requirement',
    keywords: '',
    description: ''
  }
}, {
  path: '/installation',
  name: 'installation',
  component: Installation,
  meta: {
    title: 'BalmUI - Installation',
    keywords: '',
    description: ''
  }
}, {
  path: '/advanced',
  name: 'advanced',
  component: Advanced,
  meta: {
    title: 'BalmUI - Advanced',
    keywords: '',
    description: ''
  }
}, {
  path: '/kill-ie',
  name: 'kill-ie',
  component: KillIE,
  meta: {
    title: 'BalmUI - Kill IE',
    keywords: '',
    description: ''
  }
}];

export default foundationRoutes;
