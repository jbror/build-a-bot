<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <RouterLink :to="{ name: 'Home' }" class="nav-link">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo" />
            Build-a-Bot
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <!-- <HomePage msg="Welcome to Your Vue.js App"/> -->
    <router-view />
    <RobotBuilder />
  </main>
</template>

<script setup>
import { ref, provide } from 'vue';




const userName = ref('Bror');
provide('userName', userName);

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}

body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;

}
</style>

<style scoped>
main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1400px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1460px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}


.nav-link {
  text-decoration: none;
  color: inherit
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;

}
</style>
