<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Unification Day {{ ($route.path as string).split('/').at(-1) }}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Unification Day Links
        </q-item-label>

        <div v-for="link in pages" :key="link.title">
          <EssentialLink v-if="link.target === 'external'" v-bind="link" />

          <EssentialLinkInternal v-else v-bind="link" />
        </div>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import EssentialLinkInternal from 'components/EssentialLinkInternal.vue';
import { pages } from 'src/data/years.json';

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
