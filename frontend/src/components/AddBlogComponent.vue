<!-- Get object as a props and displays it -->
<template>
    <div>
        <!-- RESPONSE MSG FROM DB -->
        <div class="error" v-for="error of EditingErr" :key="error.i" >
            {{error}}
        </div>
        <div class="response-msg" v-for="response of response" :key="response.i" > 
            {{response}}
        </div>
        <div id="imgPrewContainer" style="opacity : 0">
            imagePrew:
            <img id="imagePrew" src="" width="100" height="100" />
        </div>
        <form @submit.prevent="saveNewBlog" >
            <input name="text" type="text" placeholder="Blog Header"  BlogHeader = 'modelValue'  lazy required
            maxlength="100"
             @input='$emit("update:modelValue", $event.target.value)'
            />
            <input name="body" type="text"  placeholder="Blog Body" lazy required
            BlogBody = 'modelValue'
            maxlength="65535"
            @input='$emit("update:BlogBody", $event.target.value)'
            />
            <input type="file" @change="onFileChange" accept="image/png, image/jpeg, image/gif, image/jpg, image/webp, image/bmp"/>
            <button class="add-blog-btn" type="submit"> Add new Blog</button>
        </form>
    </div>
</template>
<script>
export default {
   props: {
    response: Array,
    onFileChange: Function ,
    saveNewBlog: Function,
    EditingErr: Object,

  },
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