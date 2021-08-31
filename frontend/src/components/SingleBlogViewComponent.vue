<!-- Get object as a props and displays it -->
<template>
    <div class="SingleBlogPageWrapper" >
      
      <div class="kakaWrapper" style="flex:1;  background: #fff;  ">
        <img class="SingleBlogPageImg" :src="item.img" alt="" />
        <div class="SinglePageBlogBody"> 
        <h2 class="SingleBlogPageHeader"> 
          <i class="fas fa-book-reader"></i>
          {{item.BlogHeader}}
          <hr>
        </h2>
        {{item.BlogBody}}
          d became the first nation where SMS text messaging was offered on a competitive as well as on a commercial basis. GSM was allowed[by whom?] in the United States and the radio frequencies were blocked and awarded to US "Carriers" to use US technology....d became the first nation where SMS text messaging was offered on a competitive as well as on a commercial basis. GSM was allowed[by whom?] in the United States and the radio frequencies were blocked and awarded to US "Carriers" to use US technology....d became the first nation where SMS text messaging was offered on a competitive as well as on a commercial basis. GSM was allowed[by whom?] in the United States and the radio frequencies were blocked and awarded to US "Carriers" to use US technology....
          d became the first nation where SMS text messaging was offered on a competitive as well as on a commercial basis. GSM was allowed[by whom?] in the United States and the radio frequencies were blocked and awarded to US "Carriers" to use US technology....d became the first nation where SMS text messaging was offered on a competitive as well as on a commercial basis. GSM was allowed[by whom?] in the United States and the radio frequencies were blocked and awarded to US "Carriers" to use US technology....d became the first nation where SMS text messaging was offered on a competitive as well as on a commercial basis. GSM was allowed[by whom?] in the United States and the radio frequencies were blocked and awarded to US "Carriers" to use US technology....
          d became the first nation where SMS text messaging was offered on a competitive as well as on a commercial basis. GSM was allowed[by whom?] in the United States and the radio frequencies were blocked and awarded to US "Carriers" to use US technology....d became the first nation where SMS text messaging was offered on a competitive as well as on a commercial basis. GSM was allowed[by whom?] in the United States and the radio frequencies were blocked and awarded to US "Carriers" to use US technology....d became the first nation where SMS text messaging was offered on a competitive as well as on a commercial basis. GSM was allowed[by whom?] in the United States and the radio frequencies were blocked and awarded to US "Carriers" to use US technology....
       
        </div>
      </div>
      <div class="blog-userName">
        <p style="margin:0; padding: 2px 0; font-weight: bold; ">
          <i class="fas fa-user" style="font-size: 12px;"></i> 
          {{item.login}}
        </p>
         <p style="margin:0; padding: 2px 25px; font-weight: 500;">
          <i class="fas fa-stopwatch"></i>
          {{item.TimeStamp}}
        </p>
      </div>
      <button class="backBtn"   @click="goTOP">TOP</button>
    </div>
</template>
<script>
export default {
   props: {
    item: Object,
    hasBackhistory: Boolean
  },
  methods: {
    goTOP() {
      window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    }
  }
}
</script>
  <style scoped>
  .blog-userName {
  background: #444;
  color: #fff;
  border-radius: 0 0 8px 8px ;
  }

 .SingleBlogPageWrapper {
   display: flex;
    border-radius: 10px 10px 15px 15px;
    border: 2px solid rgb(68 68 68);
    border-top: 20px solid #444444;

    text-align: center;
    flex-direction: column;
    min-height: 100vh;
    padding: 0;
    width: 80%;
    margin: 0 auto;
 }
 .SingleBlogPageImg {
  margin: 80px 30px 30px 60px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.3);
  float: left;
  height: auto;
  width: 40%;
  max-height: 250px;
 }

 @media only screen and (max-width: 1024px) {
  .SingleBlogPageImg {
    float: none;
    width: 80%;
    display: block;
    margin: 0 auto;
  }
}

 .SingleBlogPageHeader{
   text-align: center;
   font-style: italic;

   font-size: 25px;
  font-weight: bold;
   
 }

 .SinglePageBlogBody {
  
   border-radius:10px 10px 0 0;
   padding: 60px;
   text-align: left;
 
 }

 .backBtn {
   text-decoration: none;
   border-radius: 99%;
   background: #636363;
   padding: 5px;
   border: 1px solid #000;
   color: #fff;
   cursor: pointer;
   font-weight:bold;
   position: fixed;
   right: 20px;
   bottom: 40px;
   font-size: 12px;
   width: 60px;
   height: 60px;
 }

  .backBtn:hover {
    background: #4e4d4d;
  }
 </style>