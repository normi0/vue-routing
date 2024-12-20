<template>
  <nav>
    <div class="nav-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  padding: 30px;
  text-align: center;
  background-color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: #42b983;
}
nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
  padding-bottom: 5px;
  transition: border-color 0.3s;
}
</style>
