
import { auth, counter } from './modules';

export default {
    modules: {
        auth,
        counter,
    },
}

// export default store(({ Vue }) => {
//     const Store = createStore(
//         new Module({
//             modules: {
//                 auth,
//                 counter,
//             },
//         }),
//         // Vuex options
//         {
//             strict: !!process.env.DEV,
//         }
//     );

//     return Store;
// });
