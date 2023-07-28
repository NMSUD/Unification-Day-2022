<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import {EssentialLinkProps} from 'src/types/props';

withDefaults(defineProps<EssentialLinkProps>(), {
  link: '#',
});
</script>
