<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed } from 'vue';

interface Props {
  discordLink: string;
  glyphs: string;
  galaxy: string;
}

defineProps<Props>();

const $q = useQuasar()

const currentTheme = computed(() => {
  const darkModeActive = $q.dark.isActive;
  return `&theme=${darkModeActive ? 'dark' : 'light'}`;
})
</script>


<template>
  <h2>Important Info</h2> <!--//NOSONAR-->
  <iframe v-if="discordLink" :src="discordLink + currentTheme" title="Discord Embed"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" width="400"
    height="500"></iframe>
  <div>
    <span>Glyphs:</span>
    <span>{{ glyphs }}</span>
  </div>
  <div>({{ galaxy }} Galaxy)</div>
</template>
