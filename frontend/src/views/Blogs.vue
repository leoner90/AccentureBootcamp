<template>
<div>
    <Article :item="blogs" id="element" />
</div>
</template>

<script>
//COMPONENTS IMPORT
import Article  from '@/components/blogComponent.vue';


export default {
data() {
    return {
      blogs: [],
      curentPostCount: this.$store.state.curentPostCount,
      PostLimits: this.$store.state.PostLimits,
    };
  }, 
  methods: {
    //GET ALL POSTS ON MOUNTED 
    async GetAllBlogsFun(){
      let data = { limitStart: this.curentPostCount , limit: this.PostLimits, whatToCall: 'getAllBlogs', ASCorDESC: 'ASC' } ;
      await this.$store.dispatch("fetchBlogs", data);
      this.blogs =   this.$store.getters.ReturnBlogs;  
      this.curentPostCount =  this.$store.state.curentPostCount;
      this.PostLimits =   this.$store.state.PostLimits;
    },
    async HowManyElonStart() {
      let ArticleWrapper =  document.getElementById('ArticleWrapper');   
            console.log('before' , ArticleWrapper.offsetHeight   , window.scrollY,window.innerHeight);
      if(ArticleWrapper.offsetHeight   <   window.innerHeight  )  {
        console.log(ArticleWrapper.offsetHeight   ,window.innerHeight);
        await this.GetAllBlogsFun();
        this.HowManyElonStart()
      }
    },
    async OnScrollBlogLoader() {
      if(window.scrollY + window.innerHeight >  document.documentElement.scrollHeight - 10) {
        document.removeEventListener('scroll', this.OnScrollBlogLoader);
        await this.GetAllBlogsFun();
        document.addEventListener('scroll', this.OnScrollBlogLoader);
      }
    }
  },
  async mounted() {
    await this.GetAllBlogsFun();
    // await this.HowManyElonStart();
    document.addEventListener('scroll', this.OnScrollBlogLoader)
  }, 
  async updated() {
      await this.HowManyElonStart();
  },
  unmounted () {
     document.removeEventListener('scroll', this.OnScrollBlogLoader);
  },
 
  components: {
     Article
  }
}
</script>

<style scoped>
 ::v-deep(.ArticleWrapper)  {
  padding: 0 8%;
}
@media only screen and (max-width: 1024px) {
  ::v-deep(.ArticleWrapper){
      padding: 0;
  }
}

::v-deep(.blogPage){
    flex: 0 0 100% !important;
}

::v-deep(.border-helper) {
  display: flex;
  flex-direction: row;
}
@media only screen and (max-width: 1024px) {
  ::v-deep(.border-helper) {
    flex-direction: column;
  }
}

::v-deep(.folAllBlogsPage) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 20px;
}
@media only screen and (max-width: 1300px) {
  ::v-deep(.folAllBlogsPage) {
      padding: 20px 20px 10px;
  }
}

@media only screen and (max-width: 1024px) {
  ::v-deep(.folAllBlogsPage){
      padding: 10px;
  }
}
::v-deep(.blogImg){
  flex: 1;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
}

::v-deep(.blog-img){
  height: auto;
  max-height: 300px;
  width: 80%;
  flex: 1;
  padding: 7px;
  margin: 5px;
  box-shadow: 0px 1px 18px 0px rgba(0,0,0,0.44);
  -webkit-box-shadow: 0px 1px 18px 0px rgba(0,0,0,0.44);
  -moz-box-shadow: 0px 1px 18px 0px rgba(0,0,0,0.44);
  border-radius: 15px;
}
::v-deep(#element){
    -webkit-animation: 1s ease 0s normal forwards 1 fadein;
    animation: 1s ease 0s normal forwards 1 fadein;
}

@keyframes fadein{
    0% { opacity:0.1;   transform: scale(0.1);}
    33% { opacity:0.3;  }
    66% { opacity:0.5;  }
    100% { opacity:1; transform: scale(1.0); }
}

@-webkit-keyframes fadein{
     0% { opacity:0.1;   transform: scale(0.1);}
    33% { opacity:0.3; }
    66% { opacity:0.5; }
    100% { opacity:1; transform: scale(1.0); }
}
 
</style>