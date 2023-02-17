<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderNavigation from "./components/HeaderNavigation.vue";
</script>

<template>
  <header>
    <header-navigation />
  </header>
  <RouterView class="text-white" />
</template>
