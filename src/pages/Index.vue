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
import Vue from 'vue';
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';

export default Vue.extend({
    name: 'PageIndex',
    components: { ExampleComponent },
    data(): {
        regularData: string;
        todos: Todo[];
        meta: Meta;
        } {
        return {
            regularData: 'check',
            meta: { totalCount: 1200, },
            todos: [
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
            ]
        };
    },
    mounted () {
    },
    computed: {
        counter(): number { return this.$store.counter.counter },
        tripleCounter(): number { return this.$store.counter.tripleCounter },
        localComputed(): string {
            return this.$store.auth.loginStatus
        },
    },
    methods: {
        actIncrement(): void {
            this.$store.counter.actIncrement()
        },
        inc() {
            this.$store.counter.INCREMENT(1)
        },
    },
});
</script>
