<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
    <router-link to="/about">Go to About Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    return {
      msg: 'Home Page'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;
  
  h1 {
    color: #2c3e50;
    margin-bottom: 20px;
  }

  a {
    color: #42b983;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
