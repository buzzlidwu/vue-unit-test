export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/directory',
    name: 'directory',
    component: () => import('@/views/Directory')
  },
  {
    path: '/directoryStore',
    name: 'directoryStore',
    component: () => import('@/views/DirectoryStore')
  }
]