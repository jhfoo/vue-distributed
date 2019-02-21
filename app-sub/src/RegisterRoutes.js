import SubHome from './views/SubIndex.vue'
import AnotherSubpage from './views/AnotherSubpage.vue'

export default function RegisterRoutes(router) {
    router.addRoutes([{
            path: '/subapp',
            name: 'SubHome',
            component: SubHome
        },
        {
            path: '/subapp/page2',
            name: 'AnotherSubpage',
            component: AnotherSubpage
        }
    ])
    console.log('RegisterRoutes called')
    return 'SubHome'
}