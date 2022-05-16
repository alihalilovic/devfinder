<script setup>
import { onMounted, ref } from "vue"
import ProfileContainer from "./components/ProfileContainer.vue"
import Header from "./components/Header.vue";

const userTheme = ref("light-theme")

const setTheme = (theme) => {
  localStorage.setItem("user-theme", theme);
  userTheme.value = theme;
  document.documentElement.className = theme;
}

const toggleTheme = () => {
  const currentTheme = localStorage.getItem("user-theme")

  if (currentTheme === "dark-theme") setTheme("light-theme")
  else setTheme("dark-theme") 
}

const getTheme = () => {
  return localStorage.getItem("user-theme")
}

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
  return hasDarkPreference ? "dark-theme" : "light-theme"
}

onMounted(() => {
  const initUserTheme = getTheme() || getMediaPreference()
  setTheme(initUserTheme)
})




</script>

<template>
  <Header @toggle-theme="toggleTheme"/>
  <ProfileContainer />
</template>

<style>
:root {
  --primary-color: #dedfe0;
  --secondary-color: #ffffff;
  --button-color: #127fcc;
  --text-color: #141414;
}

:root.dark-theme {
  --primary-color: #17213d;
  --secondary-color: #303f69;
  --text-color: #ffffff;
}

.btn {
  background: var(--button-color);
  border: none;
  outline: none;
  color: #ffffff;
  padding: 1.2rem 1.5rem;
  border-radius: 20px;
  margin: .5rem;
  font-weight: bold;
  transition: 0.25s ease;
}

.btn:hover {
  background: var(--text-color);
  color: var(--primary-color);
  cursor: pointer;
}

body {
  background: var(--primary-color);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: all 0.3s ease;
}

* {
  font-family: "Barlow";
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>