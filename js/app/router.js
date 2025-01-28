import {login} from './pages/login.js';
// import {champaings} from './pages/champaings.js';
// import {champaing} from './pages/champaing.js';
// import {users} from './pages/users.js';
// import {user} from './pages/user.js';

// import {ads} from './pages/ads.js';
// import {statistics} from './pages/statistics.js';
// import {payments} from './pages/payments.js';
// import {sites} from './pages/sites.js';

export const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes:[
        {path:'/', name:'Sing in', component:login },
        // {path:'/champaings', name:'Champaings', component:champaings },
        // {path:'/champaing/:id', name:'Champaing', component:champaing },
        // {path:'/users', name:'Users', component:users },
        // {path:'/user/:id', name:'User', component:user },
        // {path:'/ads', name:'Ads', component:ads },
        // {path:'/statistics', name:'Statistics', component:statistics },
        // {path:'/payments', name:'Payments', component:payments },
        // {path:'/sites', name:'Sites', component:sites },
    ]
});