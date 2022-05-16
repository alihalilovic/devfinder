<script setup>
import { ref } from "vue";
import { state } from "../state";

const searchNameQuery = ref("");

const handleSearchClick = async () => {
  const res = await fetch(
    `https://api.github.com/users/${searchNameQuery.value}`
  );
  const data = await res.json();
  const {
    login,
    avatar_url,
    company,
    bio,
    followers,
    public_repos,
    following,
    twitter_username,
    blog,
    created_at,
    name,
    location
  } = data;

  const formattedDate = new Date(created_at).toLocaleDateString()

  state.profile = {
    login, avatar_url, company, bio, followers, public_repos, followers,
    public_repos, following, twitter_username, blog, created_at: formattedDate, name, location
  };
  
  state.profileVisible = true

  console.log(state.profile)
};
</script>

<template>
  <svg
    class="icon-misc search-icon"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clip-rule="evenodd"
    ></path>
  </svg>
  <input
    placeholder="Search any GitHub username..."
    class="search-field"
    type="text"
    v-model="searchNameQuery"
  />
  <button class="btn" @click="handleSearchClick">Search</button>
</template>

<style scoped>
.search-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translate(0, -50%);
  width: 25px;
}

.search-field {
  background: var(--secondary-color);
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.3rem;
  border-radius: 20px;
  padding: 1.25rem 1.5rem;
  padding-left: 4rem;
  box-sizing: border-box;
  color: var(--text-color);
}

.search-field::placeholder {
  color: var(--text-color);
  opacity: 0.7;
}

.icon-misc {
  fill: var(--text-color);
}
</style>
