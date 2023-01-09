import * as VueRouter from "vue-router";
import Home from "./components/Home";
import Cars from "./components/Cars";
import Car from "./components/Car";
import CarFull from './components/CarFull'
import Error from './components/NotFound'

export default new VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "",
      component: Home,
      name: 'v-home-page'
    },
    {
      path: "/cars",
      component: Cars,
      name: 'v-cars-page'
    },
    {
       path: '/car/:id',
       component: Car,
       name: 'v-car-page',
       children: [
        {
            path: 'info',
            component: CarFull,
            name: 'v-carinfo-page'
        }
       ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: Error,
        name: 'v-error-page'
    }
  ],
});
