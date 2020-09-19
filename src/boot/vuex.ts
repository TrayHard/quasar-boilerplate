import store from 'src/store';
import { boot } from 'quasar/wrappers';

declare module 'vue/types/vue' {
    interface Vue {
        $store: typeof store
    }
}

export default boot(({ Vue }) => {
    Vue.observable(store);
    Vue.prototype.$store = store;
});
