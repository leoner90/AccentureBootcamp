<template>
<div>
    <Article :item="blogs"  />
</div>
</template>

<script>
//COMPONENTS IMPORT
import Article  from '@/components/blogComponent.vue';
//SERVER SIDE FUNCTIONS IMPORT
import ServerFunctions from '@/ServerSideFunctions/ServerFunctions.vue';

export default {
data() {
    return {
      blogs: [],
      PostLimits: 10,
    };
  }, 
  methods: {
    //GET ALL POSTS ON MOUNTED 
    async GetAllBlogsFun(){
      this.PostLimits = this.PostLimits + 1; 
      let data = {limit: this.PostLimits, whatToCall: 'getAllBlogs'} ;
      this.blogs = await ServerFunctions.serverCall(data);
      for(let i = 0; i <  this.blogs.length; i++ ) {
        this.blogs[i].img =  'data:image/png;base64,' + this.blogs[i].img.data;
      }
    },
    // async OnScrollBlogLoader() {
    //   // console.log(this.$refs.body.scrollHeight)
    // }
  },
  mounted() {
      this.GetAllBlogsFun();
      //  document.addEventListener('scroll', this.OnScrollBlogLoader)
  },
 
  components: {
     Article
  }
}
</script>