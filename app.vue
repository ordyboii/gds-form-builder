<script setup>
const { $directus, $readItems, $createItem } = useNuxtApp();

const boards = await useAsyncData("boards", () => {
  return $directus.request($readItems("Boards"));
});

const data = reactive({
  name: "",
});

async function createBoard() {
  await $directus.request($createItem("Boards", data));
  await refreshNuxtData("boards");
}

const login = useAsyncData(
  "login",
  () => $directus.login("jake.ord543@gmail.com", "Grassmaneditor@1"),
  {
    immediate: false,
  }
);
</script>

<template>
  <NuxtRouteAnnouncer />
  <h1>hello2</h1>
  <button @click="login.execute()">Login</button>
  <pre>{{ login.data }}</pre>
  <button @click="() => boards.execute()">Get boards</button>
  <pre>{{ boards.data }}</pre>
  <pre>{{ boards.error }}</pre>
  <form @submit.prevent="createBoard">
    <input v-model="data.name" />
    <button type="submit">Create board</button>
  </form>
</template>

<style lang="scss">
@import "@radix-ui/colors/gray.css";
@import "@radix-ui/colors/blue.css";
@import "@radix-ui/colors/green.css";
@import "@radix-ui/colors/red.css";
@import "@radix-ui/colors/gray-dark.css";
@import "@radix-ui/colors/blue-dark.css";
@import "@radix-ui/colors/green-dark.css";
@import "@radix-ui/colors/red-dark.css";

* {
  box-sizing: border-box;
}
</style>
