<template>
    <Article :item="blogs" />
</template>

<script>
//COMPONENTS IMPORT
import Article  from '@/components/blogComponent.vue';
import { mapGetters } from 'vuex';
export default {
data() {
    return {
      blogs: [],
    };
  }, 

  methods: { 
    //GET ALL POSTS ON MOUNTED 
    async getLastBlogsFun(){
      let data = {limitStart: 0 , limit: 3, whatToCall: 'getAllBlogs', ASCorDESC: 'DESC'} ;
      await this.$store.dispatch("getLastPosts", data);
      this.blogs = this.$store.getters.ReturnlastBlogs; 
    },
  },
  
  mounted() {
      //Get last three posts from db on mounted event
      this.getLastBlogsFun();
  }, 
  computed: {
    ...mapGetters(['ReturnBlogs'])
  },

  components: {
     Article
  }
}
</script>

 
<style scoped>
::v-deep(.ArticleWrapper)  {
  display: flex;
}

::v-deep(.ArticleWrapper > div) {
  flex-basis: 33.333333%;
  margin-top: 1%;
  border-radius: 5px;
  flex: 1;
}

@media only screen and (max-width: 1000px) {
  ::v-deep(.ArticleWrapper) {
    margin: 20px 0;
    display:block;
  }

  ::v-deep(.ArticleWrapper > div) {
 
    flex-basis: 100%;
  }
}
 

</style>