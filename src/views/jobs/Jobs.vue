<template>
  <div>
    <h1>Jobs:</h1>
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobsDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Software Engineer",
          company: "Google",
          salary: "$100,000",
        },
        {
          id: 2,
          title: "Product Manager",
          company: "Facebook",
          salary: "$90,000",
        },
        {
          id: 3,
          title: "Data Scientist",
          company: "Amazon",
          salary: "$120,000",
        },
      ],
    };
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.job h2 {
  background: #f4f4f4;
  color: #144c33;
  cursor: pointer;
}
.job h2:hover {
  background: lightgray;
}
.job {
  background: #f4f4f4;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 10px lightgray;
}

h1 {
  color: #144c33;
}
.job a {
  text-decoration: none;
}
</style>
