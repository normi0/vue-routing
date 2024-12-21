<template>
  <nav>
    <div class="nav-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </div>
  </nav>
  <router-view></router-view>
  <div class="nav-buttons">
      <button @click="redirect">Redirect</button>
      <button @click="goBack">Go Back</button>
      <button @click="goForward">Go forward</button>
    </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    redirect() {
      this.$router.push("/");
    },
    goBack() {
      this.$router.back();
    },
    goForward() {
      this.$router.forward();
    },
  },
};
</script>

<style>
.nav-buttons {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #2c3e50;
}
button {
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2c3e50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 1px solid #42b983;
  box-shadow: 0 0 10px #42b983;
}
button:hover {
  background-color: #42b983;
  color: black;
}
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
  transition: color 0.3s;
}
nav a:hover {
  color: #42b983;
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
