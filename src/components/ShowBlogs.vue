<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索" />
    <div :key="index" v-for="(blog, index) in filterBlogs" class="single-blog">
      <router-link :to="`/blog/${blog.id}`">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>
        {{ blog.body | roughly }}
        <router-link :to="`/blog/${blog.id}`">更多</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  created() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        this.blogs = response.data.slice(0, 10);
        // console.log(response.data.slice(0,10));
      },
      (error) => {
        console.log(error.message);
      }
    );
  },
  computed: {
    filterBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a{
    color: #444;
    text-decoration: none;
}

input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}


</style>