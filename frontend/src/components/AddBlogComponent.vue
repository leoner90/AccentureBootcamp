<!-- Get object as a props and displays it -->
<template>
    <div>
        <!-- RESPONSE MSG FROM DB -->
        <h2 class="AddnewPostHeader">
            <i class="fas fa-plus-circle"></i>
            NEW POST 
        </h2>
        <div class="response-msg" v-for="response of response" :key="response.i" > 
            {{response}}
        </div>
        <div id="imgPrewContainer" v-show="imgPrewContainer">
            <img id="imagePrew" src="" />
        </div>
        <div class="error" v-for="error of EditingErr" :key="error.i" >
            {{error}}
        </div>
        <form @submit.prevent="saveNewBlog" >
            <input class="addBlogHeaderForm" name="text" type="text" placeholder="Blog Title" 
            BlogHeader = 'modelValue'  lazy required
            maxlength="30"
             @input='$emit("update:modelValue", $event.target.value)'
            />
            <textarea class="addBlogBodyForm"  name="body" type="text"  placeholder="Blog Text" 
            lazy required BlogBody = 'modelValue'
            maxlength="65535"
            @input='$emit("update:BlogBody", $event.target.value)'
            />
            <input type="file" @change="onFileChange" accept="image/png, image/jpeg, image/gif, image/jpg, image/webp, image/bmp"/>
            <button class="add-blog-btn" type="submit"> CREATE</button>
        </form>
    </div>
</template>
<script>
export default {
 props:['response' , 'onFileChange','saveNewBlog','EditingErr','imgPrewContainer'] 
}
</script>
<style scoped>
#imagePrew {
    width:  40%;
    display: block;
    margin: 0 auto;
    height: auto;
    max-height: 300px;
    border: 3px solid rgba(0,0,0,0.3);
    border-radius: 15px;
}

@media only screen and (max-width: 1024px) {
    #imagePrew {
        width: 100%;
    }
}


.AddnewPostHeader {
    text-align: center;
    padding: 30px 0 0;
    font-weight: 900;

}
.response-msg {
    text-align: center;
    color: red;
    padding: 10px;
}

.response-msg:before {
    content: "* "
}

form > input {
    padding: 5px;
    margin: 5px;
    display: block;
    margin: 5px auto;
}
.addBlogHeaderForm,
.addBlogBodyForm {
    border-radius: 3px;
    width: 60%;
    height: 30px;
    margin: 10px auto;
    display: block;
    border: 1px solid #ccc;
}
@media only screen and (max-width: 1024px) {
    .addBlogHeaderForm,
    .addBlogBodyForm {
        width: 100%;
    }
}
.addBlogBodyForm {
    height: 220px;
}
    
.mustLoginText {
    color: red;
}


.add-blog-btn {
 font-weight: bold;
  background: #16457d;
  color: #fff;
  padding: 7px 15px;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  margin: 5px auto;
  width: 30%;
}
@media only screen and (max-width: 1024px) {
    .add-blog-btn {
        width: 80%;
    }
}

.add-blog-btn:hover {
    background: #3668a2;
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

 