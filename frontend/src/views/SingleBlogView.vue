<template>
  <div>
    <SingleBlogView :item="blog" :goTOP="goTOP"/>
  </div>
</template>

<script>
//COMPONENTS IMPORT
import SingleBlogView  from '@/components/SingleBlogViewComponent.vue';

export default {
  data() {
    return{
      blog: {},
    }
  },
  methods: {
    //If page accessed through "all blogs" page - get blog from router params otherwise got it from db by id from query
    async OnMount(){
      if(this.$route.params.item){
        this.blog  = JSON.parse(this.$route.params.item) ;
      } else {
        let id =  this.$route.query.id
        let obj = {whatToCall: 'getBlogByID', id : id }
        await this.$store.dispatch("getBlogByID", obj);
        this.blog = this.$store.state.SignleBlog[0];
      }
    },
    goTOP() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  },
  components: {
    SingleBlogView
  },
  async mounted() {
    await this.OnMount();
  }
}
</script>