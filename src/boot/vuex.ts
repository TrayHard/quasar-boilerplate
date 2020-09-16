import { createStore, Module } from 'vuex-smart-module';
import storeData from 'src/store';
import { boot } from 'quasar/wrappers';
import Vuex from 'vuex';

declare module 'vue/types/vue' {
    interface Vue {
        // $store: typeof store
    }
}

export default boot(({ Vue }) => {
    Vue.use(Vuex);
    const store = createStore(new Module(storeData), { strict: !!process.env.DEV, });
    Vue.prototype.$store = store;
});
