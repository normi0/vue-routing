<template>
  <div class="about">
    <h1>About Page</h1>
    <p>This is the about page content.</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'About',
  setup() {
    return {
      msg: 'About Page'
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding: 20px;

  h1 {
    color: #2c3e50;
    margin-bottom: 20px;
  }

  p {
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
