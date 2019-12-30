const Requirement = () => import('@/views/quickstart/requirement');
const Installation = () => import('@/views/quickstart/installation');
const Advanced = () => import('@/views/quickstart/advanced');
const KillIE = () => import('@/views/quickstart/kill-ie');

const foundationRoutes = [
  {
    path: '/requirement',
    name: 'requirement',
    component: Requirement
  },
  {
    path: '/installation',
    name: 'installation',
    component: Installation
  },
  {
    path: '/advanced',
    name: 'advanced',
    component: Advanced
  },
  {
    path: '/kill-ie',
    name: 'kill-ie',
    component: KillIE
  }
];

export default foundationRoutes;
