<template>
  <header>
    <nav>
      <ul>
        <li class ="nav-item">
          <img class ="logo" src="./assets/build-a-bot-logo.png" alt="logo" />
          Build-a-Bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
  <HomePage msg="Welcome to Your Vue.js App"/>
  </main>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
body {
background: linear-gradient(to bottom, #555, #999);
background-attachment: fixed;

}

main {
margin: 0 auto;
padding: 30px;
background-color: white;
width: 1400 px;
min-height: 300px;
}

header{
background-color: #999;
width: 1460px;
margin: 0 auto;
}

ul{
 padding: 3px;

}



</style>
