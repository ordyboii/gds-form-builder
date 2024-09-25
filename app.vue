<script setup lang="ts">
import { readMe } from "@directus/sdk";

const { $directus, $readItems } = useNuxtApp();

const login = await useAsyncData(
  "login",
  () => $directus.login("jake.ord543@gmail.com", "Grassmaneditor@1"),
  {
    immediate: false,
  }
);

const boards = await useAsyncData(
  "boards",
  async () => {
    return $directus.request($readItems("Boards"));
  },
  {
    immediate: false,
  }
);

const me = await useAsyncData("me", () => $directus.request(readMe()), {
  immediate: false,
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <h1>hello2</h1>
  <button @click="() => login.execute()">Login</button>
  <pre>{{ login.data }}</pre>
  <pre>{{ login.error }}</pre>
  <button @click="() => boards.execute()">Get boards</button>
  <pre>{{ boards.data }}</pre>
  <pre>{{ boards.error }}</pre>
  <button @click="() => me.execute()">Get me</button>
  <pre>{{ me.data }}</pre>
  <pre>{{ me.error }}</pre>
</template>
