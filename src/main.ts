import './assets/main.css'

import App from './App.vue'
// import router from './router'
import { ViteSSG } from 'vite-ssg'
import HomePageContent from '@/components/homePageContent.vue'
import SearchPageContent from '@/components/searchPageContent.vue'

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes: [
      {
        path: '/',
        name: 'home',
        component: HomePageContent,
      },
      {
        path: '/search',
        name: 'search',
        component: SearchPageContent,
      }
    ], },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  },
)
