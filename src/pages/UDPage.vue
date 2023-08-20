<script setup lang="ts">
import { Year } from 'src/types/years';
import { onMounted, ref } from 'vue';
import { RouteParams, onBeforeRouteUpdate, useRoute } from 'vue-router';
import ImportantInfo from 'src/components/ImportantInfo.vue';
import { useUdDataStore } from 'src/stores/udDataStore';
import { storeToRefs } from 'pinia';
const route = useRoute();
const udDataStore = useUdDataStore();

const { websiteCreator, logoCreator, image, logo, activeYear } = storeToRefs(udDataStore);

const data = ref<Year | undefined>(undefined);

async function loadData(routeParams: RouteParams) {
  if (!activeYear.value) {
    if (typeof routeParams.year !== 'string') {
      activeYear.value = '';
      return;
    } else {
      activeYear.value = routeParams.year;
    }
  }
  try {
    const { default: jsonData } = await import(`../assets/${activeYear.value}.json`);

    data.value = jsonData;
    logoCreator.value = jsonData.logoCreator;
    websiteCreator.value = jsonData.websiteCreator;
    image.value = jsonData.image;
    logo.value = jsonData.logo;
  } catch {
    data.value = undefined;
  }
}

onMounted(async () => {
  await loadData(route.params);
});

onBeforeRouteUpdate(async (to) => {
  await loadData(to.params);
});
</script>

<template>
  <q-page class="row justify-evenly text-center">
    <div v-if="data">
      <ImportantInfo v-bind="data.importantInfo" />
    </div>

    <div
      v-else
      class="text-weight-bold text-h4 q-py-md bg-negative text-white"
    >
      Failed to load data!
    </div>
  </q-page>
</template>
src/stores/udDataStore
