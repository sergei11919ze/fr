import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/one', component: ()=> import("./components/TheComponentsOne.vue"), alias: '/'},
        {path: '/:id?', component: ()=> import("./components/TheComponentsTwo.vue")},
        
    ]
})