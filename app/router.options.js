const customRoutes = [
    {
        path: '/xxx',
        name: 'xxx',
        component: () => import('@/pages/users/index.vue')
    },
    {
        path: '/yyy',
        name: 'yyy',
        component: () => import('@/pages/users/create.vue')
    },
    {
        path: 'zzz',
        reactive: '/users'
    }
]
export default {
    route: (_routes) => _routes.concat(customRoutes)
}