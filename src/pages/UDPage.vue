<script setup lang="ts">
import { Year } from 'src/types/years';
import { onMounted, ref } from 'vue';
import { RouteParams, onBeforeRouteUpdate, useRoute } from 'vue-router';
import ImportantInfo from 'src/components/ImportantInfo.vue';
const route = useRoute();

const data = ref<Year | undefined>(undefined);

async function loadData(routeParams: RouteParams) {
  const currentYear = routeParams.year;
  if (typeof currentYear !== 'string') {
    data.value = undefined;
    return;
  }

  try {
    data.value = await import(`/src/data/${currentYear}.json`);
  } catch {
    data.value = undefined;
  }
}

onMounted(async () => {
  await loadData(route.params);
})

onBeforeRouteUpdate(async (to) => {
  await loadData(to.params);
})
</script>


<template>
  <div v-if="data">
    <ImportantInfo v-bind="data.importantInfo" />


  </div>

  <div v-else>
    Failed to load data!
  </div>
</template>
