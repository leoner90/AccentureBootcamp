<template>
  <Article :item="blogs" />
</template>

<script>
//COMPONENTS IMPORT
import Article  from '@/components/blogComponent.vue';
import { mapGetters,mapState } from 'vuex';

export default {
  data() {
    return {
      blogs: [],
    };
  }, 
  methods: { 
    //GET LAST BLOGS ON MOUNTED , Limit set in vuex state
    async getLastBlogsFun(){
      let data = { limitStart: 0 , limit: this.HomePageBlogsLimit, whatToCall: 'getAllBlogsByLimit', ASCorDESC: 'DESC' } ;
      await this.$store.dispatch("getLastBlogs", data);
      this.blogs = this.ReturnlastBlogs; 
    },
  },
  mounted() {
    this.getLastBlogsFun();
  }, 
  computed: {
    ...mapGetters(['ReturnlastBlogs']),
    ...mapState(['HomePageBlogsLimit'])
  },
  components: {
     Article
  }
}
</script>

<style scoped>
::v-deep(.ArticleWrapper) {
  display: flex;
  flex-wrap: wrap;
}

::v-deep(.ArticleWrapper > div) {
  flex-basis: 33.333333%;
  margin-top: 1%;
  border-radius: 5px;
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