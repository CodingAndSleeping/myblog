<template>
  <div id="add-blog">
      <h1>添加博客</h1>
      <form v-show="!submited">
          <label>博客标题</label>
          <input type="text" v-model="blog.title" required>
          <label>博客内容</label>
          <textarea v-model="blog.content"></textarea>
          <div id="checkboxes">
              <label>Vue.js</label>
              <input type="checkbox" value="Vue.js" 
              v-model="blog.categories">
              <label>React.js</label>
              <input type="checkbox" value="React.js" 
              v-model="blog.categories">
              <label>Node.js</label>
              <input type="checkbox" value="Node.js" 
              v-model="blog.categories">
              <label>Angular4</label>
              <input type="checkbox" value="Angular4" 
              v-model="blog.categories">
          </div>
          <label>作者:</label>
          <select v-model="blog.author">
              <option :key="index" v-for="(author, index) in authors">{{author}}</option>
          </select>
          <button @click.prevent="postBlog">添加博客</button>
      </form>
       <div v-show="submited">
           <h3>您的博客添加成功！</h3>
       </div>
      <!-- <div id="preview">
          <h3>博客总览</h3>
          <p>博客标题:{{blog.title}}</p>
          <p>博客总览:{{blog.content}}</p>
          <p>博客分类</p>
          <ul>
              <li :key="index" v-for="(category, index) in blog.categories">{{category}}</li>
          </ul>
          <p>作者:{{blog.author}}</p>

      </div> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "AddBlog",
    data(){
        return {
            blog:{
                title:'',
                content:'',
                categories:[],
                author:'lzt1'
            },
            authors:["lzt1", "lzt2", "lzt3"],
            submited:false
        }
    },
    methods:{
        postBlog(){
            // https://jsonplaceholder.typicode.com
            axios.post("http://jsonplaceholder.typicode.com/posts",{
                title:this.blog.title,
                body:this.blog.content,
                userId:1,
            }).then(
                (response)=>{
                    console.log(response.data);
                    this.submited = true;
                },
                (error)=>{
                    console.log("请求失败",error.message)
                }
            )
        }
    }
}
</script>

<style scoped>
    #add-blog *{
        box-sizing: border-box;
        
    }
    #add-blog{
        margin: 20px auto;
        max-width: 800px;
        padding: 20px;
        background-color: pink;
    }
    label{
        display: block;
        margin: 20px 0 10px;
    }
    input[type='text'], textarea, select{
        display: block;
        width: 100%;
        padding: 8px;
    }

    textarea{
        height:200px;
    }
    #checkboxes label{
        display: inline-block;
        margin-top: 0;
    }
    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }
    button{
        display: block;
        margin: 20px 0;
        background: crimson;
        color: white;
        border: 0;
        padding: 14px;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }

    /* #preview{
        padding: 10px 20px;
        border:1px dotted #ccc;
        margin: 30px 0;
    } */
    h3{
        margin-top: 10px;
    }
</style>