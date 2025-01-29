import {login} from './pages/login.js';
import {campaings} from './pages/campaings.js';
// import {campaing} from './pages/campaing.js';
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
        {path:'/campaings', name:'Campaings', component:campaings },
        // {path:'/campaing/:id', name:'Campaing', component:campaing },
        // {path:'/users', name:'Users', component:users },
        // {path:'/user/:id', name:'User', component:user },
        // {path:'/ads', name:'Ads', component:ads },
        // {path:'/statistics', name:'Statistics', component:statistics },
        // {path:'/payments', name:'Payments', component:payments },
        // {path:'/sites', name:'Sites', component:sites },
    ]
});