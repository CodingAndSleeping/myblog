import Vue from 'vue';
import VueRouter from 'vue-router';
import AddBlog from '../components/AddBlog.vue';
import ShowBlogs from '../components/ShowBlogs.vue';
import SingleBlog from '../components/SingleBlog.vue';



Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/addblog',
            component:AddBlog
        },
        {
            path:'/',
            component:ShowBlogs
        },
        {
            path:'/blog/:id',
            component:SingleBlog
        }
    ],
    mode:'history'
})


