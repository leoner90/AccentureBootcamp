<!-- Get blogs from db and display them through "FOR", and provide delete/edit button with blog id -->
<template>
  <div class="blogPage">
    <Article :item="blogs"  :blogDelete='blogDelete' :error='error' />
  </div>
</template>

<script>
import Article  from '@/components/UserBlogsComponent.vue';
export default {
  data() {
    return {
      blogs:  [],
      error: '',
    };
  }, 
  methods: {
    //Get All Blogs with current user id, id is provided through sessions ,server validation is user id == blog creator id
    async GetAllUserBlogs() {
      let obj = {whatToCall: 'getAllThisUserBlogs'} ;
      await this.$store.dispatch("GetAllSpecificUserBlogs", obj);
      this.blogs = this.$store.state.ThisUserBlogs;
      this.error = this.$store.state.autorisationErrors;
    },
    //Delte blog using server side function and provided id
    async blogDelete(id) {
      let obj = { whatToCall: 'deleteBlog', id: id }
      await this.$store.dispatch("DeleteBlog", obj);      
    },
  },
  components: {
    Article
  },
  //on mount function
  async mounted() {
    await this.GetAllUserBlogs();
  }
}
</script>