<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed } from 'vue';

interface Props {
  discordLink: string;
  glyphs: string;
  galaxy: string;
}

defineProps<Props>();

const $q = useQuasar();

const currentTheme = computed(() => {
  const darkModeActive = $q.dark.isActive;
  return `&theme=${darkModeActive ? 'dark' : 'light'}`;
});
</script>

<template>
  <h2 class="text-h4">Important Info</h2>
  <iframe
    v-if="discordLink"
    :src="discordLink + currentTheme"
    class="q-mb-sm discord-embed"
    title="Discord Embed"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    width="400"
    height="500"
  ></iframe>
  <div>
    <span class="text-h5">Glyphs: </span>
    <span class="glyph-font">{{ glyphs }}</span>
  </div>
  <div class="text-subtitle1">({{ galaxy }} Galaxy)</div>
</template>

<style lang="scss">
.discord-embed {
  .body--light & {
    border: 1px solid #d3d3d3;
    border-radius: 7px;
  }

  .body--dark & {
    border: none;
  }
}
</style>
