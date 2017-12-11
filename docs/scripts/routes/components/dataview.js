const List = () => import('../../views/components/list');
const Table = () => import('../../views/components/table');
const Pagination = () => import('../../views/components/pagination');

const dataviewRoutes = [{
  path: 'list',
  name: 'components.list',
  component: List
}, {
  path: 'table',
  name: 'components.table',
  component: Table
}, {
  path: 'pagination',
  name: 'components.pagination',
  component: Pagination
}];

export default dataviewRoutes;
