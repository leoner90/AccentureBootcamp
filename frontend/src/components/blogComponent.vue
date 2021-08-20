<!-- Get object as a props and displays it -->
<template>
  <div class="blogPage" v-for="items of item" :key="items.message" >
    <h4 class="blog-header"> {{items.BlogHeader}}</h4>
    <div class="blog-body">{{items.BlogBody}}</div>
    <div class="blog-userName">Author:{{items.login}}</div>
  </div>
</template>

<script>
export default { 
  props: {
    item: Object  ,
  },
}
</script>

<style scoped>
.blog-header {
  font-weight: bold;
  background: #ccc;
  color:#fff;
  text-align: center;
  padding:5px;
}

.blogPage {
  box-sizing: border-box;
  width: 48%; 
  float: left;
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

</style>