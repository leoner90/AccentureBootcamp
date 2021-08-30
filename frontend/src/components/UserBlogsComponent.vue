<!-- Get object as a props and displays it -->
<template>
  <div>
    <div class="ArticleWrapper" id="ArticleWrapper" >
      <div class="blogPage" v-for="items of item" :key="items.message" >
        <img :src="items.img" style="width: 100% ; height : 200px;"/>
        <h4 class="blog-header"> {{items.BlogHeader}}</h4>
        <div class="blog-body">{{items.BlogBody}}</div>
        <div class="blog-userName">Author:{{items.login}}</div>
        <div class="blog-userName">TIME STAMP:{{items.TimeStamp}}</div>
        <router-link :to="{ name: 'EditBlog', query: { id: items.id_blogs } }">
        <button class="userPostsEditBtn"> Edit Post {{items.id_blogs}}</button>
      </router-link>
        <button class="userPostsDeleteBtn" @click="blogDelete(items.id_blogs)"> 
          Delete Post
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
  props: {
    item: Object  ,
    blogDelete: Function ,
  },
}
</script>

<style scoped>
.ArticleWrapper {
  display:flex; 
  flex-direction: flow;
  flex-wrap: wrap;
}

.blog-header {
  font-weight: bold;
  background: #ccc;
  color:#fff;
  text-align: center;
  padding:5px;
}

.blogPage {
  box-sizing: border-box;
  width: 47%;
  margin: 1%;
  border: 1px solid #000;
  border-radius: 5px;
}
 
.blog-body {
  text-align: center;
  padding:15px;
  background: #aaa;
}

.blog-userName{
  font-weight: bold;
  padding: 5px;
}
 
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

.blog-template {
  width: 23%;
  margin: 1%;
  padding: 5px;
  background: #eee;
}

.blogPage > div {
  border: 1px solid #000;
  margin: 15px;
}
</style>