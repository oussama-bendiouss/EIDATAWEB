<template>
  
  <div class="nav">
    <h1 class="title">NetfliCS</h1>
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link" to="/genres">Genres</router-link> |
    <router-link class="nav-link" to="/counter">Counter</router-link> |
    <router-link class="nav-link" to="/users">Users</router-link> |
    <router-link class="nav-link" to="/add">Add a Movie</router-link> |
    <router-link class="nav-link" to="/about">About</router-link>

  </div>
  <router-view />
</template>



<style scoped>

.title {
  background-color: black;
  padding: 0px;
  color: #f1bf19;
  text-align:initial
}
.nav {
  text-align: end;
  padding: 30px;
  background-color: black;
}

.nav-link {
  font-weight: bold;
  color: white;
}

.nav-link.router-link-exact-active {
  color: #f1bf19;
}
</style>