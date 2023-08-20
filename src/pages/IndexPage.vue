<script setup lang="ts">
import { pages } from 'src/assets/years.json';
import EssentialLink from 'src/components/EssentialLink.vue';
import EssentialLinkInternal from 'src/components/EssentialLinkInternal.vue';
</script>

<template>
  <q-page class="row justify-evenly page-wrapper">
    <h2 class="text-h4 heading text-center">Unification Day Pages:</h2>

    <q-card
      v-for="page in pages"
      :key="page.title"
      class="link-card text-center q-ma-lg"
    >
      <EssentialLink
        v-if="page.target === 'external'"
        v-bind="page"
        class="link"
      />

      <EssentialLinkInternal
        v-else
        v-bind="page"
        class="link"
      />
    </q-card>
  </q-page>
</template>

<style lang="scss">
.page-wrapper {
  min-height: 0 !important;
}

.heading {
  width: 100%;
}

.link-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;

  .link {
    width: 100%;
    height: 100%;
  }
}
</style>
