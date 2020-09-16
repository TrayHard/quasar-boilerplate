import { route } from 'quasar/wrappers';
import VueRouter from 'vue-router';
import routes from './routes';

// import store from 'src/store';
// import { counter, auth } from 'src/store/modules';
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default route(({ Vue }) => {
  Vue.use(VueRouter);
  // const counterStore = counter.context(store);
  // const authStore = auth.context(store);

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  return Router;
});
