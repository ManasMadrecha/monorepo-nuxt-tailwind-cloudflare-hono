<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
await useNuxtApp().hooks.callHook('user:signup', {
  email: 'test@test.com',
  password: 'test',
})

useNuxtApp().hooks.hook('user:signup', (payload) => {
  console.log(payload)
})
</script>

<style scoped></style>