import Vue, { VNode } from 'vue'
import Router from 'vue-router'
import CardsDemo from "./views/Cards.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import("./Index.vue")
    },
    {
      path: '/cards',
      component: CardsDemo
    },
    {
      path: '/modals',
      component: () => import("./views/Modals.vue")
    },
    {
      path: '/buttons',
      component: () => import("./views/Buttons.vue")
    }
    ,{
      path: '/radios',
      component: () => import("./views/Radios.vue")
    },
    {
      path: '/switches',
      component: () => import("./views/Switches.vue")
    },
    {
      path: '/tags',
      component: () => import("./views/Tags.vue")
    },
    {
      path: '/inputtext',
      component: () => import("./views/InputText.vue")
    },
    {
      path: '/loaders',
      component: () => import("./views/Loaders.vue")
    },
    {
      path: '/checkboxes',
      component: () => import("./views/Checkboxes.vue")
    },
    {
      path: '/buttongroup',
      component: () => import("./views/ButtonGroup.vue")
    },
    {
      path: '/contentloaders',
      component: () => import("./views/ContentLoaders.vue")
    },
    {
      path: '/text',
      component: () => import("./views/Text.vue")
    },
    {
      path: '/heading',
      component: () => import("./views/Heading.vue")
    },
    {
      path: '/pagination',
      component: () => import("./views/Pagination.vue")
    },
    {
      path: '/accordions',
      component: () => import("./views/Accordions.vue")
    },
    {
      path: '/box',
      component: () => import("./views/Box.vue")
    },
    {
      path: '/select',
      component: () => import("./views/Select.vue")
    }
  ]
})
