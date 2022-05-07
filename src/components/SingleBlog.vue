<template>
  <div id="single-blog">
      <h1>{{blog.title}}</h1>
      <article>{{blog.body}}</article>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"SingleBlog",
    data(){
        return {
            blog:{}
        }
    },
    created(){
        
        axios.get(`http://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`).then(
            response=>{
                this.blog = response.data;
            },
            error=>{
                console.log(error.message);
            }
        )
    }
}
</script>

<style scoped>
#single-blog{
    max-width: 960px;;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>