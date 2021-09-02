<template>
  <div>
      <Article :item="blogs" id="element" />
  </div>
</template>

<script>
//COMPONENTS IMPORT
import Article  from '@/components/blogComponent.vue';
import { mapGetters,mapState } from 'vuex';

export default {
  data() {
    return {
      blogs: [],
      NoMoreCallThenPostInDb: 0 ,
    };
  }, 
  methods: {
    //Get all blogs from db , limit is set in state limit , current post count updates through mutation on blog loading
    async GetAllBlogsFun() {
      let data = { 
        limitStart: this.curentPostCount , 
        limit: this.PostLimits,
        whatToCall: 'getAllBlogsByLimit', ASCorDESC: 'ASC' 
      };
      await this.$store.dispatch("getAllBlogs", data);
      this.blogs = this.ReturnBlogs;  
    },
    //Recursive function , loads more blogs if client window height is enough for that
    async HowManyElonStart() {
      let ArticleWrapper =  document.getElementById('ArticleWrapper');   
      if(ArticleWrapper.offsetHeight < window.innerHeight && this.NoMoreCallThenPostInDb <= this.AllBlogsInDb  ){
        await this.GetAllBlogsFun();
        this.NoMoreCallThenPostInDb++;
        this.HowManyElonStart()
      }
    },
    //Load more Blogs On scroll , deletes "on scroll" event till  blog is loaded
    async OnScrollBlogLoader() {
      if(window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 10 ) {
        document.removeEventListener('scroll', this.OnScrollBlogLoader);
        await this.GetAllBlogsFun();
        document.addEventListener('scroll', this.OnScrollBlogLoader);
      }
    }
  },
  //Gets All Blogs and set scroll event
  async mounted() {
    await this.GetAllBlogsFun();
    document.addEventListener('scroll', this.OnScrollBlogLoader)
  },
  //Recursive function , loads more blogs if client window height is enough for that
  async updated() {
    await this.HowManyElonStart();
  },
  //Deletes Scroll event on leaving the page
  unmounted () {
    document.removeEventListener('scroll', this.OnScrollBlogLoader);
  },
  computed: {
    ...mapGetters(['ReturnBlogs']),
    ...mapState(['curentPostCount','PostLimits','AllBlogsInDb'])
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

::v-deep(.blogPage){
  flex: 0 0 100% !important;
}

::v-deep(.border-helper) {
  display: flex;
  flex-direction: row;
}

::v-deep(.folAllBlogsPage) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 20px;
}

::v-deep(.blogImg){
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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

/* Animation For scrolling event*/
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

/* for 1300 px wide or smaller screen*/
@media only screen and (max-width: 1300px) {
  ::v-deep(.folAllBlogsPage) {
    padding: 20px 20px 10px;
  }
}

/* for 1024 px wide or smaller screen*/
@media only screen and (max-width: 1024px) {
  ::v-deep(.ArticleWrapper){
    padding: 0;
  }

  ::v-deep(.border-helper) {
    flex-direction: column;
  }

  ::v-deep(.folAllBlogsPage){
    padding: 10px;
  }
}
</style>