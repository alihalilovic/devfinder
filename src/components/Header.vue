<script setup>
defineEmits(["toggleTheme"])
</script>

<template>
  <div class="container">
    <h2>devfinder</h2>
    <button class="toggle-btn" @click="$emit('toggleTheme')">Toggle theme</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
}


.toggle-btn {
  border: none;
  outline: none;
  text-transform: uppercase;
  padding: .7rem 1.5rem;
  background: none;
  color: var(--text-color);
  transition: 0.3s ease;
}

.toggle-btn:hover {
  cursor: pointer;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .container {
    width: 90%;
    margin: auto;
    margin-bottom: 1.2rem;
    margin-top: 1.2rem;
  }

  .toggle-btn {
    padding: 0;
  }
}
</style>