<template>
  <div>
    <Addblog  
      v-model:AddBlogHeader = "BlogHeader"
      v-model:AddBlogBody='BlogBody' 
      :response="response" 
      :onFileChange="onFileChange"   
      :saveNewBlog="saveBlog"
      :EditingErr="EditingErr"
      :imgPrewContainer="imgPrewContainer"
    />
  </div>
</template>
 
<script>
// Components
import Addblog from '../components/AddBlogComponent.vue';

export default {
  data() {
    return {
      BlogHeader: '',
      BlogBody: '',
      response: [],
      BlogImg: '',
      selectedFile: '',
      EditingErr: [],
      imgPrewContainer: false,
    }
  },
  methods: { 
    //ON SAVING - VALIDATES  CLIEN AND SERVER SIDE,If no Err. THEN DISPLAYS RESULT MSG AND WIPES INPUT VALUES
    async saveBlog() {
      this.EditingErr = [];
      //IMG ERR CHECK
      if(this.selectedFile){
        let fileExtensionName = this.selectedFile.type.split('/').pop();
        let pattern= new RegExp((/(gif|jpe?g|png|webp|bmp)$/i))
        !pattern.test(fileExtensionName)  ? this.EditingErr.push("Wron File Type") : null;
        this.selectedFile.size > 4000000  ? this.EditingErr.push("File is tooooo big max 4mb") : null;
      }
      //FIELDS ERROR CHECK
      this.BlogHeader.length > 100 ? this.EditingErr.push("Header Max lenght 100 simbols") : null;
      this.BlogBody.length > 65535 ? this.EditingErr.push("TEXT MAX 65,535 simbols") : null;
      if ( this.BlogBody.length == 0  || this.BlogHeader.length == 0) {
        this.EditingErr.push("No Blank Fields")
      }
      //IF NO ERR. -> server side validation and error or success msg.
      if(this.EditingErr.length == 0){
        let data = {whatToCall: 'AddBlog' , BlogHeader: this.BlogHeader, BlogBody: this.BlogBody};
        const formData = new FormData();
        formData.append("file", this.selectedFile);
        formData.append("NewBlogContent",  JSON.stringify(data));
        await this.$store.dispatch("AddnewBlog", formData);
        this.response = this.$store.state.susseccMsg;
        this.BlogHeader = '';
        this.BlogBody = '';
        this.imgPrewContainer = false;
      }
    },
    //IMG PREVIEW and file value assigning
    async onFileChange(e) {
      this.imgPrewContainer = true;
      const selectedFile = e.target.files[0]; // accessing file
      if(selectedFile){
        let url = URL.createObjectURL(selectedFile);
        document.getElementById("imagePrew").src = url;
        this.selectedFile = selectedFile;
      }
    },
  },
  components: {
    Addblog,
  },
}
 </script>