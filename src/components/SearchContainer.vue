<script setup>
import Search from "./Search.vue";

</script>

<template>
  <div class="search-container">
    <Search />
  </div>
</template>

<style scoped>
.search-container {
  width: 100%;
  position: relative;
  display: flex;
  border-radius: 20px;
  background: var(--secondary-color);
}
</style>
