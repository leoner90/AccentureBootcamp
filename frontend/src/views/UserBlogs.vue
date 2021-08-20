<!-- Get blogs from db and display them through "FOR", and provide delete/edit button with blog id -->
<template>
<Article :item="blogs" />
  <div class="blogPage">
    <div v-for="(item, i) in blogs" :key="i">
      <h4 class="blog-header"> HEADER: {{item.BlogHeader}}</h4>
      <div class="blog-body">
        BODY: {{item.BlogBody}}
      </div>
      <router-link :to="{ name: 'EditBlog', query: { id: item.id_blogs } }">
        <button class="userPostsEditBtn"> Edit Post {{item.id_blogs}}</button>
      </router-link>
      <button class="userPostsDeleteBtn" @click="blogDelete(item.id_blogs)"> 
        Delete Post
      </button>
    </div>
  </div>
</template>

<script>
//SERVER SIDE FUNCTIONS IMPORT
import GetAllBlogsFun from '@/ServerSideFunctions/GetAllBlogsFun.vue';
import IsUserLogedIn from '@/ServerSideFunctions/IsUserLogedInFun.vue';
import deleteBlog from '@/ServerSideFunctions/DeleteBlogFun.vue';

export default {
data() {
    return {
      blogs: [],
    };
  }, 
  methods: {
    //Get All Blogs with current user id , true indicates that it's specified user blogs , id is provided through sessions (REDO this)
    async GetAllBlogsFun() {
      this.blogs = await GetAllBlogsFun.getdata(true);
    },
    //CHECKS IS USER LOGED IN ON MOUNTED , IF NOT - REDIRECTS TO MAIN PAGE
    async IsUserLogedIn() {
      this.isLoged = await IsUserLogedIn.IsLogedIn();
      if (!this.isLoged) {
        await this.$router.push('/');
      }
    },
    //Delte blog using server side function and provided id
    async blogDelete(id) {
      let result = await deleteBlog.delete({id: id})
      if (result){
        location.reload();
      } else {
        alert('You Have No Permisions');
      }
      
    }
  },
  //on mount function
  mounted() {
      this.GetAllBlogsFun();
      this.IsUserLogedIn();
  }
}
</script>

<style scoped>
.userPostsEditBtn {
  border-radius: 20px;
  padding: 5px 10px;
  background: #eee;
  margin: 10px auto;
  font-weight: bold;
  cursor: pointer;
}

.userPostsDeleteBtn {
  border-radius: 20px;
  padding: 5px 10px;
  background: red;
  font-weight: bold;
  margin: 10px auto;
  color: #fff;
  cursor: pointer;
}

.blog-header {
  padding: 10px;
  margin: 5px;
}

.blog-template {
  width: 23%;
  margin: 1%;
  padding: 5px;
  background: #eee;
}

.blog-body {
  padding: 10px;
  background: #aaa;
  margin: 2px;
}

.blogPage > div {
  border: 1px solid #000;
  margin: 15px;
}

.blogPage {
  text-align: center;
  width: 50%;
  margin: 0 auto;
  border: 1px solid #000;
}
</style>