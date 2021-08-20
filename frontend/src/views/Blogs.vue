<template>
<div>
    <Article :item="blogs" />
</div>
</template>

<script>
//COMPONENTS IMPORT
import Article  from '@/components/blogComponent.vue';
//SERVER SIDE FUNCTIONS IMPORT
import GetAllBlogsFun from '@/ServerSideFunctions/GetAllBlogsFun.vue';

export default {
data() {
    return {
      blogs: [],
    };
  }, 
  methods: {
    //GET ALL POSTS ON MOUNTED 
    async GetAllBlogsFun() {
      this.blogs = await GetAllBlogsFun.getdata();
    },
  },
  mounted() {
      this.GetAllBlogsFun();
  },
  components: {
     Article
  }
}
</script>