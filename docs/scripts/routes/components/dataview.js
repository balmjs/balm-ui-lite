const Card = () => import('../../views/components/card');
const List = () => import('../../views/components/list');
const Table = () => import('../../views/components/table');
const Pagination = () => import('../../views/components/pagination');

const dataviewRoutes = [{
  path: 'card',
  name: 'components.card',
  component: Card
}, {
  path: 'list',
  name: 'components.list',
  component: List
}, {
  path: 'table/:id?',
  name: 'components.table',
  component: Table
}, {
  path: 'pagination',
  name: 'components.pagination',
  component: Pagination
}];

export default dataviewRoutes;
