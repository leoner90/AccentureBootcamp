<!-- Get object as a props and displays it -->
<template>
  <div>
  <h2 class="User-blog-Header">
    <i class="fab fa-blogger-b"></i>
    YOUR BLOGS
  </h2>
    <div class="ArticleWrapper" id="ArticleWrapper" >
      <div class="blogPage" v-for="items of item" :key="items.message" >
        <div class="blog-helper">
          <img :src="items.img" style="width: 98% ; height : 150px;border-radius: 5px; display:block; margin: 5px auto; "/>
          <h4 class="blog-header"> {{items.BlogHeader}}</h4>
          <div class="blog-body">{{items.BlogBody}}</div>
          <div class="blog-userName"><span style="flex: 1; font-weight: 900;"> DATE:</span> {{items.TimeStamp}}</div>
          <div style="display:flex; padding: 0 10px">
            <div style="flex: 1;   ">
              <router-link :to="{ name: 'EditBlog', query: { id: items.id_blogs } }">
              <button class="userPostsEditBtn"> <i class="fas fa-edit"></i> EDIT</button>
              </router-link>
            </div>
            <div style="flex: 1; text-align: right;">
              <button class="userPostsDeleteBtn" @click="blogDelete(items.id_blogs)">
              <i class="far fa-trash-alt"></i> 
                DELETE
              </button>
            </div>
          </div>
        </div>
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
  flex-wrap: wrap;
}
.blog-helper {
  border: 1px solid #000;
  border-radius: 5px;
   display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-header {
  font-weight: bold;
  color:#000;
  text-align: center;
  padding:5px;
  margin: 0;
   flex: 1;
}

.blogPage {
  box-sizing: border-box;
  flex: 0 0 25%;
  padding: 7.5px;
}
 
.blog-body {
  word-break: break-all;
  padding:0  10px;
  max-height: 130px;
  overflow: hidden;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-height: ;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-userName{
  
  font-size: 14px;
  display: flex;
  padding: 5px 10px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}
 
.userPostsEditBtn {
  border-radius: 7px;
  padding: 5px 10px;
  background: #eee;
  margin: 10px auto;
  font-weight: bold;
  cursor: pointer;
  min-width: 60%;
}

.userPostsDeleteBtn {
  border-radius: 7px;
  padding: 5px 10px;
  background: #ab1313;
  font-weight: bold;
  margin: 10px auto;
  color: #fff;
  cursor: pointer;
  min-width: 60%;
}

.blog-template {
  width: 23%;
  margin: 1%;
  padding: 5px;
  background: #eee;
}


  @media only screen and (max-width: 1300px) {
    .blogPage {
      box-sizing: border-box;
      flex: 0 0 50%;
    }
 }
@media only screen and (max-width: 1050px) {
  .blogPage {
    flex: 0 0 100%; 
  }
  .ArticleWrapper{
    padding: 0 15%; 
  }
}

@media only screen and (max-width: 800px) {
  .ArticleWrapper{
    padding: 0 2%; 
  }
}

.User-blog-Header {
   text-align: center;

}
</style>