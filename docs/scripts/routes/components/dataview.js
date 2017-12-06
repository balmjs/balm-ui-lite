const List = () => import('../views/list');
const Table = () => import('../views/table');
const Pagination = () => import('../views/pagination');

const dataRoutes = [{
  path: '/list',
  name: 'list',
  component: List
}, {
  path: '/table',
  name: 'table',
  component: Table
}, {
  path: '/pagination',
  name: 'pagination',
  component: Pagination
}];

export default dataRoutes;
