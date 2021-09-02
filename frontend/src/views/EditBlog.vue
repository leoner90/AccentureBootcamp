<template>
  <div>
    <BlogToEdit 
      :img= " img"
      :error = "errors"
      :id = 'id'
      :EditingErr = "EditingErr"
      v-model:BlogHeader = 'BlogHeader' 
      v-model:BlogBody = 'BlogBody' 
      :onFileChange="onFileChange"   
      :saveChanges="saveChanges"   
    />
  </div>
</template>

<script>
//IMPORT COMPONENTS
import BlogToEdit  from '@/components/EditBlogComponent.vue';

export default {
  data() { 
    return {
      img: '',
      BlogBody: '',
      BlogHeader: '',
      selectedFile: '',
      id: '',
      errors: '',
      EditingErr: [],
    }
  },
  methods: {
    //GET BLOG FOR CHANGE BY ID(FROM PARAMS) OR FROM DB ON PAGE RELOAD(FROM QUERY)
    async getBlogForEditing() {
      this.id = this.$route.query.id ;
      if(this.$route.params.item){
        console.log('FROM params')
        let blog  = JSON.parse(this.$route.params.item);
        //todo
        this.BlogBody = blog.BlogBody;
        this.BlogHeader = blog.BlogHeader;
        this.img = blog.img;
      } else {
        console.log('FROM DB')
        let obj = {whatToCall: 'getBlogToEdit', id : this.id }
        await this.$store.dispatch("getBlogByID", obj);
        //ERRS = TRUE ->IF YOU DONT HAVE RIGHT FOR BLOG EDITING OR THERE IS NO BLOG IN DB
        this.errors = this.$store.state.RightsForPostChange;
        if(!this.errors){
          let blog  = this.$store.state.SignleBlog[0];
          //todo
          this.BlogBody = blog.BlogBody;
          this.BlogHeader = blog.BlogHeader;
          this.img = blog.img;
        } else {
          this.errors = 'YOU HAVE NO RIGHTS OR BLOG DOESN\'T EXIST !'
        }  
      }
    },
    //IMG PREVIEW and file value assigning
    async onFileChange(e) {
      const selectedFile = e.target.files[0]; 
      if(selectedFile){
        let url = URL.createObjectURL(selectedFile);
        document.getElementById("Img").src = url;
        this.selectedFile = selectedFile;
      }
    },
    //ON SAVING - VALIDATES CLIEN AND SERVER SIDE,If no Err. THEN CHANGE BLOGS AND REDIRECTS TO USER BLOGS PAGE
    async saveChanges() {
      this.EditingErr = [];
      // img check
      if(this.selectedFile){
        let fileExtensionName = this.selectedFile.type.split('/').pop();
        let pattern= new RegExp((/(gif|jpe?g|png|webp|bmp)$/i))
        !pattern.test(fileExtensionName)  ? this.EditingErr.push("Wron File Type") : null;
        this.selectedFile.size > 4000000  ? this.EditingErr.push("File is tooooo big max 4mb") : null;
      }
      //fields check
      this.BlogHeader.length > 100 ? this.EditingErr.push("Header Max lenght 100 simbols") : null;
      this.BlogBody.length > 65535 ? this.EditingErr.push("TEXT MAX 65,535 simbols") : null;
      if ( this.BlogBody.length == 0  || this.BlogHeader.length == 0) {
        this.EditingErr.push("No Blank Fields")
      }
      //If no Err. THEN CHANGE BLOGS AND REDIRECTS TO USER BLOGS PAGE OTHERWISE SHOWS ERR.
      if(this.EditingErr.length == 0){
        let obj = {whatToCall: 'saveBlog' , BlogHeader: this.BlogHeader  , BlogBody: this.BlogBody, id: this.id}
        const formData = new FormData();
        formData.append("file", this.selectedFile);  // appending file
        formData.append("NewBlogContent",  JSON.stringify(obj));
        await this.$store.dispatch("SaveEditedBlog", formData);
        this.error = this.$store.state.autorisationErrors;
      }
    },  
  },
  //CALL FUNCTIONS ON MOUNT
  async mounted() {
    await this.getBlogForEditing() ;
  },
  components: {
    BlogToEdit
  },
}
</script>