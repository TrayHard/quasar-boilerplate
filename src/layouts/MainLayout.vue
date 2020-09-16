<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar
        q-btn(
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        )
        q-toolbar-title Quasar App

        div Quasar

    q-page-container
      router-view
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

const linksData = [

export default defineComponent({
  name: 'MainLayout',

});
</script>
