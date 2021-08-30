<!-- Get blogs from db and display them through "FOR", and provide delete/edit button with blog id -->
<template>
  <div class="blogPage">
    <Article :item="blogs"  :blogDelete='blogDelete' />

  </div>
</template>

<script>
import Article  from '@/components/UserBlogsComponent.vue';
export default {
data() {
    return {
      blogs:  [],
    };
  }, 
  methods: {
    //Get All Blogs with current user id , true indicates that it's specified user blogs , id is provided through sessions (REDO this)
    async GetAllBlogsFun() {
      let obj = {whatToCall: 'getAllBlogs' , UserPosts: true} ;
      await this.$store.dispatch("GetAllSpecificUserBlogs", obj);
      this.blogs = this.$store.state.ThisUserBlogs;
    },
    //CHECKS IS USER LOGED IN ON MOUNTED , IF NOT - REDIRECTS TO MAIN PAGE
    async IsUserLogedIn() {
       let isLoged = this.$store.state.isLogedIn;
      if (!isLoged) {
        this.$router.push('/');
      }
    },
    //Delte blog using server side function and provided id
    async blogDelete(id) {
      let obj = {whatToCall: 'deleteBlog', id: id }
      await this.$store.dispatch("DeleteBlog", obj);      
    },
  },
  components: {
     Article
  },
  //on mount function
  mounted() {
      this.GetAllBlogsFun();
      this.IsUserLogedIn();
  }
}
</script>

