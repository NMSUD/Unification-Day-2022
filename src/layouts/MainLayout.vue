<script setup lang="ts">
import { reactive, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import EssentialLinkInternal from 'components/EssentialLinkInternal.vue';
import { pages } from 'src/assets/years.json';
import { useUdDataStore } from 'src/stores/udDataStore';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';

const udDataStore = useUdDataStore();

const { websiteCreator, logoCreator, logo, activeYear } = storeToRefs(udDataStore);

const leftDrawerOpen = ref(false);
const router = useRouter();
const route = useRoute();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const images = reactive([
  {
    link: 'https://nomanssky.fandom.com/wiki/United_Federation_of_Travelers',
    img: 'images/logos/Federation_Emblem_2.png',
    alt: 'United Federation of Travelers Logo',
    width: '128',
  },
  {
    link: 'https://nomanssky.fandom.com/wiki/Unification_Day',
    img: `images/logos/${logo.value}`,
    alt: `Unification Day ${activeYear.value} Logo`,
    width: '170',
  },
  {
    link: 'https://nomanssky.fandom.com/wiki/United_Nations_42',
    img: 'images/logos/NewUn42Logo.png',
    alt: 'Unites Nations 42 Logo',
    width: '128',
  },
]);
</script>

<template>
  <q-layout view="lHr Lpr lfr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-btn
          v-if="$route.path.split('/')[1]"
          icon="arrow_back"
          flat
          dense
          round
          @click="router.push('/')"
        />

        <q-toolbar-title class="text-center">
          Unification Day {{ ($route.path as string).split('/').at(-1) }}
        </q-toolbar-title>

        <q-btn @click="$q.dark.toggle()"> Switch Theme </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header> Unification Day Links </q-item-label>

        <div
          v-for="link in pages"
          :key="link.title"
        >
          <EssentialLink
            v-if="link.target === 'external'"
            v-bind="link"
          />

          <EssentialLinkInternal
            v-else
            v-bind="link"
          />
        </div>
      </q-list>
    </q-drawer>

    <q-footer class="footer-colors text-center row justify-center q-py-md">
      <q-item
        v-for="image in images"
        :key="image.link"
        clickable
        tag="a"
        target="_blank"
        :href="image.link"
        class="footer-image"
      >
        <q-img
          :src="image.img"
          :alt="image.alt"
          :style="{ width: image.width + 'px' }"
          fit="contain"
        />
      </q-item>
      <p
        v-if="logoCreator"
        class="credits"
      >
        Logo by
        <a
          :href="logoCreator.link"
          target="_blank"
          >{{ logoCreator.name }}</a
        >
      </p>
      <p
        v-if="websiteCreator"
        class="credits"
      >
        Website by
        <a
          :href="websiteCreator.link"
          target="_blank"
          >{{ websiteCreator.name }}</a
        >
      </p>
    </q-footer>

    <q-page-container>
      <router-view class="q-mb-xl" />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.footer-colors {
  .body--dark & {
    color: white;
    background-color: $grey-10;
  }

  .body--light & {
    color: black;
    background-color: $grey-2;
  }
}

.credits {
  width: 100%;

  a {
    text-decoration: none;
  }
}
</style>
src/stores/udDataStore
