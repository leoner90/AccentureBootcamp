<template>
<div class="AddBLogPage">
    <div v-if="isLoged">
        <!-- RESPONSE MSG FROM DB -->
        <div class="response-msg" v-for="response of response" :key="response.i" > 
            {{response}}
        </div>
        <form @submit.prevent="saveBlog" >
            <input name="login" type="text" v-model="BlogHeader" placeholder="Blog Header" lazy/>
            <input name="password" type="text" v-model="BlogBody" placeholder="Blog Body" lazy/>
            <!-- <input type="file" @change="previewFiles" name="foo"> -->
            <button class="add-blog-btn" type="submit"> Add new Blog</button>
        </form>
    </div>
    <p class="mustLoginText" v-else> YOU MUST BE REGISTRED USER TO ADD POSTS </p>
</div>
</template>
 
<script>
import ServerFunctions from '@/ServerSideFunctions/ServerFunctions.vue';
export default {
    data() {
        return {
            BlogHeader: '',
            BlogBody: '',
            isLoged: '',
            response: '',
            BlogImg: '',
        }
    },
    methods: { 
        //ON SAVING CALLS THE FUNCTION TO ADD BLOG TO DB ,THEN DISPLAYS RESULT MSG AND WIPES INPUT VALUES
        async saveBlog() {
            let obj = {whatToCall: 'AddBlog' , BlogHeader: this.BlogHeader, BlogBody: this.BlogBody}
            let result = await ServerFunctions.serverCall(obj);
            //add error check
            this.response = result;
            this.BlogHeader = '';
            this.BlogBody = '';
        },
        //ON MOUNTED CHECKS IS USER LOGED IN , IF SO - SHOWS FORM FOR ADDING NEW BLOGS
        async IsUserLogedIn() {
            let obj = {whatToCall: 'IslogedIn' }
            this.isLoged = await ServerFunctions.serverCall(obj);
        },
        // previewFiles(event) {
        //     this.BlogImg = event.target.files[0];
        // }
    },
  mounted() {
      this.IsUserLogedIn();
  }
}
 </script>

 <style>
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
.mustLoginText {
    color: red;
}


.add-blog-btn {
font-weight: bold;
  background: lightblue;
  padding: 7px 18px;
  border-radius: 20px;
  cursor: pointer;
  display: block;
  margin: 5px auto;
}
 </style>