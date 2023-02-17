<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="h-screen flex flex-col w-screen overflow-x-hidden">
    <header>
      <div class="text-center p-5">
        <p>Hello World</p>
      </div>
    </header>
    <RouterView />
  </div>
</template>
