<template>
<div>
    <SingleBlogView :item="blog" />
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
      async OnMount(){
      
        if(this.$route.params.item){
          this.blog  = JSON.parse(this.$route.params.item) ;
        } else {
          let id =  this.$route.query.id
          //NEED INNER JOINT
          let obj = {whatToCall: 'getBlogByID', id : id }
          await this.$store.dispatch("getBlogByID", obj);
          this.blog = this.$store.state.ThisUserBlogs[0];
          // if (performance.navigation.type != performance.navigation.TYPE_RELOAD) {
          //   this.hasBackhistory = false;
          // }
        }
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