<template>
  <div class="blogPage">
    <h1>HOME PAGE - LAST 3 POSTS</h1>
    <Article :item="blogs" />
  </div>
</template>

<script>
//Server Side Functions Import
import ServerFunctions from '@/ServerSideFunctions/ServerFunctions.vue';
//COMPONENTS IMPORT
import Article  from '@/components/blogComponent.vue';

export default {
data() {
    return {
      blogs: [],
    };
  }, 

  methods: { 
    //Get last three posts from db on mounted event
    async getLastBlogsFun() {
      let data = {limit: 3, whatToCall: 'getAllBlogs'} ;
      this.blogs = await ServerFunctions.serverCall(data);
    },
  },
  
  mounted() {
      //Get last three posts from db on mounted event
      this.getLastBlogsFun();
  },

  components: {
     Article
  }
}
</script>