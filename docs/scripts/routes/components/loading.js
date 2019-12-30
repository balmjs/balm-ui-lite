const Progress = () => import('@/views/components/progress');
const Spinner = () => import('@/views/components/spinner');

const dataviewRoutes = [
  {
    path: 'progress',
    name: 'components.progress',
    component: Progress
  },
  {
    path: 'spinner',
    name: 'components.spinner',
    component: Spinner
  }
];

export default dataviewRoutes;
