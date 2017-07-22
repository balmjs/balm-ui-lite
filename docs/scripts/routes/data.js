const List = () => import('../views/list');
const Table = () => import('../views/table');
const Pagination = () => import('../views/pagination');

const dataRoutes = [{
  path: '/list',
  name: 'list',
  component: List,
  meta: {
    title: 'BalmUI - List',
    keywords: '',
    description: ''
  }
}, {
  path: '/table',
  name: 'table',
  component: Table,
  meta: {
    title: 'BalmUI - Table',
    keywords: '',
    description: ''
  }
}, {
  path: '/pagination',
  name: 'pagination',
  component: Pagination,
  meta: {
    title: 'BalmUI - Pagination',
    keywords: '',
    description: ''
  }
}];

export default dataRoutes;
