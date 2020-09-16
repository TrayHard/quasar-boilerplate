<template lang="pug">
q-page.row.items-center.justify-evenly
    div {{ counter }}
    div {{ tripleCounter }}
    div(@click="inc") CLICK ME (mut)
    div(@click="actIncrement") CLICK ME (act)
    div {{ localComputed }}
    example-component(
        title="Example component"
        active
        :todos="todos"
        :meta="meta"
    )
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from '@vue/composition-api';
import { counter, counterMapper } from 'src/store/counter';
import { auth } from 'src/store/auth';

export default defineComponent({
    name: 'PageIndex',
    components: { ExampleComponent },
    data(): {
        regularData: string;
        } {
        return {
            regularData: 'check',
        };
    },
    computed: {
        ...counterMapper.mapState(['counter']),
        ...counterMapper.mapGetters(['tripleCounter']),
        localComputed(): string {
            const ctx = auth.context(this.$store);
            return ctx.getters.loginStatus;
        },
    },
    methods: {
        ...counterMapper.mapActions(['actIncrement']),
        inc() {
            const ctx = counter.context(this.$store);
            ctx.mutations.INCREMENT(1);
        },
    },
    setup() {
        const todos = ref<Todo[]>([
            {
                id: 1,
                content: 'ct1',
            },
            {
                id: 2,
                content: 'ct2',
            },
            {
                id: 3,
                content: 'ct3',
            },
            {
                id: 4,
                content: 'ct4',
            },
            {
                id: 5,
                content: 'ct5',
            },
        ]);
        const meta = ref<Meta>({ totalCount: 1200, });
        return { todos, meta };
    },
});
</script>
