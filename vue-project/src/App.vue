<script setup>
import Header_Component from './components/Header_Component.vue'
import SideNav_Component from './components/SideNav_Component.vue'
// import Header from './components/AppHeader.vue'

</script>
<template>
  <Header_Component />
  <div class="d-flex">
    <SideNav_Component />
    <main>
      <router-view />
    </main>
  </div>
</template>
<style>
:root {
  --bg: #313135;
  --color: #e7e7f2;
}

body {
  background-color: var(--bg);
  color: var(--color);
}

ul,
li {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

main {
  flex: 1;
}

a {
  color: var(--color);
  text-decoration: none;
  display: inline-block;
}

/* 
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
