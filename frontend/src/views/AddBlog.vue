<template>
<div class="AddBLogPage">
    <div v-if="isLoged">
        <!-- RESPONSE MSG FROM DB -->
        <div class="response-msg" v-for="response of response" :key="response.i" > 
            {{response}}
        </div>
        <div id="imgPrewContainer" style="opacity : 0">
            imagePrew:
            <img id="imagePrew" src="" width="100" height="100" />
        </div>
        <form @submit.prevent="saveBlog" >
            <input name="login" type="text" v-model="BlogHeader" placeholder="Blog Header" lazy/>
            <input name="password" type="text" v-model="BlogBody" placeholder="Blog Body" lazy/>
            <input type="file" @change="onFileChange" />
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
            selectedFile: '',
        }
    },
    methods: { 
         async callal (formData, method = 'POST') {
            const response = await fetch(`http://localhost:3000/AddBlog`,{
            method,
            credentials: 'include',
            body: formData
            });
            let ResponseReturn = await response.json();
            return ResponseReturn;
        },
        //ON SAVING CALLS THE FUNCTION TO ADD BLOG TO DB ,THEN DISPLAYS RESULT MSG AND WIPES INPUT VALUES
        async saveBlog() {
            let obj = {whatToCall: 'AddBlog' , BlogHeader: this.BlogHeader, BlogBody: this.BlogBody};
            const formData = new FormData();
            formData.append("file", this.selectedFile);  // appending file
            formData.append("file2",  JSON.stringify(obj));
            let result = await this.callal(formData);
            this.response = result;
            this.BlogHeader = '';
            this.BlogBody = '';
        },
       
        async onFileChange(e) {
            document.getElementById("imgPrewContainer").style.opacity = 1;
            const selectedFile = e.target.files[0]; // accessing file
            let url = URL.createObjectURL(selectedFile);
            document.getElementById("imagePrew").src = url;
            this.selectedFile = selectedFile;
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