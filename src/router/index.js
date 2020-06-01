import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);



const router = new VueRouter({
  mode: "history", //this is used to take the # out of the router
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      props: true
    },
    
    {
      path:"/details/:slug",
      name: "DestinationDetails",
      props: true,
      component: () =>
        import(/* webpackChunkName: "DestinationDetails" */"../views/DestinationDetails.vue"),
      children : [
        {
          path: ":experienceSlug",
          name: "experienceDetails",
          props: true,
        component: () =>
        import(/* webpackChunkName: "ExperienceDetails" */"../views/ExperienceDetails.vue"),
        }
      ]
    },
    {
      path:"*",
      name: "notFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */"../views/NotFound.vue")
    }
  ]
});

export default router;
