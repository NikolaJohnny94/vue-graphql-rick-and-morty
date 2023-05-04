import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apolloClient'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faCodepen,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import VueLazyLoad from 'vue3-lazyload'
import App from './App.vue'
import router from './router'
import './assets/main.css'

library.add(faGithub, faLinkedinIn, faCodepen, faTwitter, faSun, faMoon)

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(router).use(VueLazyLoad).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
