<!-- Get object as a props and displays it -->
<template>
 
<div class="ArticleWrapper" id="ArticleWrapper" style="display:flex; flex-direction: flow; flex-wrap: wrap;">
    <div class="blogPage" v-for="items of item" :key="items.message">
      <div class="border-helper">
        <div class="blogImg">
          <img class="blog-img" :src="items.img"/>
        </div>
        <div class="folAllBlogsPage">
          <h4 class="blog-header"> {{items.BlogHeader}}</h4>
          <div class="blog-body">
            <!-- Line height / div max-height = limit -->
            {{items.BlogBody.substring(0, 250)}}...
          </div>
          <router-link class="readMoreBtn" :to="{ name: 'SingleBlogView', query: { id:items.id_blogs }, params: { item:  JSON.stringify(items) } }"> 
              READ MORE....
          </router-link>
          <div class="blog-userName">
            <span class="authorInitials">
              {{items.login.substring(0, 2).toUpperCase() }}
            </span>
            <span >
              <p>{{items.login.toUpperCase()}}</p>
              <p>{{items.TimeStamp}}</p>
            </span>
            <p class="blog-userName2"></p>
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
  },
  data(){
    return {
      toggle: true,
   }
  },
}
</script>

<style scoped>


.authorInitials {
  width: 50px;
  height: 50px;
  display: inline-block;
  background: #d4d4d4;
  border-radius: 99%;
  text-align: center;
  line-height: 50px;
  margin-right: 10px;
  font-weight: bold;
  color: #666;
  margin-top: 5px;
  margin-right: 20px;
}
.blog-img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
.ArticleWrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 100px 0;
}
.ArticleWrapper > div {
  flex: 0 0 33.333333%;
  margin-top: 1%;
  border-radius: 5px;
}
@media only screen and (max-width: 1024px) {
  .ArticleWrapper {
    margin: 20px 0;
  }

  .ArticleWrapper > div {
    flex: 0 0 100%;
  }
}

.border-helper {
   padding: 20px;
   border-radius: 5px;
    box-shadow: -1px 1px 18px -4px rgba(0,0,0,0.75);
  -webkit-box-shadow: -1px 1px 18px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 1px 18px -4px rgba(0,0,0,0.75);
  margin: 30px 2%;
}

.readMoreBtn {
  font-size: 14px;
  padding: 15px 0;
  font-weight: bold;
  text-decoration: none;
  color: #888;
  display: block;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

.blog-header {
  font-weight: bold;
  color:#000;
  MARGIN:5px;
  text-align: center;
  padding:5px;
}

.blogPage {
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
 
.blog-body {
  max-height: 150px;
  line-height: 25px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  padding:15px;
  flex: 1;
}

.blog-userName{
  display: flex;
  padding: 3px;
  font-size: 12px;
}

</style>