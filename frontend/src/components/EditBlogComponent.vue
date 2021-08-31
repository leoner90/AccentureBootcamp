 
 <!-- Get object as a props and displays it -->
<template>
<div style="width: 100%; margin: 0 auto; text-align: center;">
<h2 class="page-header">EDIT BLOG #</h2>
  <div class="page-wrapper">
      <img :src="img" id="Img"/>
      <div style="text-align: left; width: 60%; margin: 0 auto;">
        <input type="file" @change="onFileChange" accept="image/png, image/jpeg, image/gif, image/jpg, image/webp, image/bmp"/>
      </div>
      <div class="error" v-for="error of EditingErr" :key="error.i" >
          {{error}}
      </div>
        <div>
         <input class="EditBlogHeaderInput" name="header" type="text" :value="BlogHeader" required
            maxlength="100"
            @input='$emit("update:BlogHeader", $event.target.value)'
          />

         <textarea class="EditBlogBodyInput" name="body" type="text" :value="BlogBody" required
            maxlength="65535"
            @input='$emit("update:BlogBody", $event.target.value)'
          />
        </div>
       <button class="Save-changes-btn" @click="saveChanges"> SAVE CHANGES </button>
    </div>
    </div>
</template>

<script>

export default { 
  props:['BlogBody' , 'BlogHeader','error','saveChanges','onFileChange','img','EditingErr'] ,    
  data(){
    return {
      toggle: true,
   }
  },
}
</script>
 

 <style scoped>
 #Img {
    width: 40%;
    height: 200px;
    display: block;
    margin: 20px auto;
    height: auto;
    border: 3px solid rgba(0,0,0,0.3);
    border-radius: 15px;
    max-height: 300px;
 }

.EditBlogHeaderInput ,
.EditBlogBodyInput { 
  margin: 15px 0;
  border: 1px solid #444;
  border-radius: 3px;
  min-width: 60%;
  min-height: 30px;;
}
.EditBlogBodyInput {
   min-height: 220px;
}
.page-wrapper {
  text-align: center;
}

.Save-changes-btn {
  font-weight: bold;
  background: #009688;
  color: #fff;
  padding: 7px 18px;
  border-radius: 7px;
  margin: 5px 0;
  width: 40%;
  cursor: pointer;
}

@media only screen and (max-width: 1024px) {
    #Img {
        width: 60%;
        max-height: 250px;
    }
    .EditBlogHeaderInput ,
    .EditBlogBodyInput { 
      min-width: 80%;
    }
}

.error {
    text-align: center;
    letter-spacing: 1px;
    background: hsl(0deg 68% 57% / 88%);;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 0.8vw;
    width: 60%;
    line-height: 20px;
    height: 20px;
    margin: 2px auto;
    padding: 5px;
}

@media only screen and (max-width: 1300px) {
    .error {
       font-size: 1.5vw;
       width: 70%;
    }
 }
@media only screen and (max-width: 1024px) {
    .error {
        font-size: 2vw;
        width: 90%;
    }
}

.error:before {
  font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f071  ";
}
</style>