<script setup>
const login = await useFetch("/api/cookie", {
  method: "post",
  immediate: false,
});

const me = await useFetch("/api/me");

watch(login.data, () => {
  me.execute();
});
</script>

<template>
  <h1>hi, {{ me.data.value?.first_name }}</h1>
  <pre>{{ me.data }}</pre>
  <pre>{{ me.error }}</pre>
  <form action="/api/me" @submit.prevent="login.execute()" method="post">
    <button type="submit">Login</button>
  </form>
</template>
