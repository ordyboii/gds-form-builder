<script setup lang="ts">
const { $directus, $readItems } = useNuxtApp();

const { data: test } = await useAsyncData("test", async () => {
  return $directus.request($readItems("test"));
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <h1>hello2</h1>
  <ul v-for="tes in test">
    <li>{{ tes.title }}</li>
  </ul>
</template>
