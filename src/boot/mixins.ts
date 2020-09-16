import { boot } from 'quasar/wrappers';

declare module 'vue/types/vue' {
    interface Vue {}
}

export default boot(({ Vue }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    Vue.mixin({
        methods: {
            showError(msg: string, err: Error) {
                //@ts-ignore
                this.$q.notify({
                    type: 'negative',
                    position: "top",
                    message: `${msg ? msg : 'Ошибка!'}${err.message ? ': ' + err.message : ''}`
                })
            },
            showSuccess(msg: string) {
                //@ts-ignore
                this.$q.notify({
                    type: 'positive',
                    position: "top",
                    message: `${msg ? msg : 'Успешно!'}`,
                    timeout: 1500
                })
            },
        },
    })
});
