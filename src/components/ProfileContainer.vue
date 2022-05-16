<script setup>
import SearchContainer from "./SearchContainer.vue";
import { state } from "../state";
</script>

<template>
  <div class="container-main">
    <SearchContainer />
    <div class="container" v-if="state.profileVisible">
      <div>
        <img class="github-picture" :src="state.profile.avatar_url" alt="" />
      </div>
      <div class="main-info">
        <div class="top-part">
          <div class="info-container">
            <div class="name-joined-container">
              <h2>{{ state.profile.name }}</h2>
              <p>Joined {{ state.profile.created_at }}</p>
            </div>
            <p>@{{ state.profile.login }}</p>
            <p>{{ state.profile.bio || "This profile has no bio..." }}</p>
          </div>
          <div class="bottom-part">
            <div class="additional-info">
              <div class="profile-stats">
                <div>
                  <p>Repos</p>
                  <h2>{{ state.profile.public_repos }}</h2>
                </div>
                <div>
                  <p>Followers</p>
                  <h2>{{ state.profile.followers }}</h2>
                </div>
                <div>
                  <p>Following</p>
                  <h2>{{ state.profile.following }}</h2>
                </div>
              </div>
              <div class="profile-misc">
                <div>
                  <svg
                    class="icon-misc"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {{ state.profile.location || "No location found" }}
                </div>
                <div>
                  <svg
                    class="icon-misc"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {{ state.profile.blog || "No blog" }}
                </div>
                <div>
                  <svg
                    class="icon-misc"
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    <path
                      d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
                    ></path>
                  </svg>
                  {{ state.profile.twitter_username || "No twitter account" }}
                </div>
                <div>
                  <svg
                    class="icon-misc"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {{ state.profile.company || "No company info" }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: var(--secondary-color);
  border-radius: 20px;
  margin-top: 1rem;
  padding: 2rem;
  display: flex;
  max-width: 780px;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .container-main {
    width: 90%;
    margin: auto;
  }
}

.main-info {
  display: flex;
  justify-content: center;
}

.bottom-part {
  margin-top: 1.5rem;
}

.name-joined-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.info-container > p {
  margin-top: 1rem;
}

.github-picture {
  width: 75%;
  max-width: 150px;
  border-radius: 50%;
}

.profile-stats {
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 1rem 1.5rem;
}

.profile-misc {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;
}

.icon-misc {
  fill: var(--text-color);
  width: 20px;
  margin-right: 0.25rem;
}

.profile-misc > div {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
</style>
