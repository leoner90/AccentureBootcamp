<template>
<div>
    <BlogToEdit 
      :img= " blogs.img"
      :error = "error"
      :EditingErr = "EditingErr"
      v-model:BlogHeader = 'BlogHeader' 
      v-model:BlogBody = 'BlogBody' 
      :onFileChange="onFileChange"   
      :saveChanges="saveChanges"   
    />
 </div>
</template>

<script>
//Import components
import BlogToEdit  from '@/components/EditBlogComponent.vue';

export default {
  
  data() { 
    return {
      BlogBody: '22777',
      BlogHeader: 'gaga33',
      selectedFile: '',
      id: '',
      obj: {},
      blogs: [] ,
      error: this.$store.state.autorisationErrors,
      EditingErr: [],
    }
  },

  methods:{
    //CHECKS IS USER LOGED IN ON MOUNTED , IF NOT - REDIRECTS TO MAIN PAGE
    async IsUserLogedIn() {
      let isLoged = this.$store.state.isLogedIn;
      if (!isLoged) {
        await this.$router.push('/LogIn');
      } else {
          await this.getBlogForEditing() ;
      }
    },

    //GET BLOG FOR CHANGE BY ID(FROM QUERY)
    async getBlogForEditing() {
        this.id = this.$route.query.id ;
        if(this.$store.state.ThisUserBlogs.length == 0) {
          console.log('FROM DB')
          let obj = {whatToCall: 'getBlogByID', id : this.id }
          await this.$store.dispatch("getBlogByID", obj);
          //if no posts in DB
          this.error = this.$store.state.autorisationErrors;
          if(!this.error) {
            let userBlog = this.$store.state.ThisUserBlogs;
            this.blogs = userBlog.find(x => x.id_blogs == this.id );
            this.BlogBody = this.blogs.BlogBody;
            this.BlogHeader = this.blogs.BlogHeader;
          }
        }
        else {
          console.log('FROM Memory')
          let userBlog = this.$store.state.ThisUserBlogs;
          this.blogs = userBlog.find(x => x.id_blogs == this.id );
          this.BlogBody = this.blogs.BlogBody;
          this.BlogHeader = this.blogs.BlogHeader;
        }
        
    },
     async onFileChange(e) {
      const selectedFile = e.target.files[0]; // accessing file
      if(selectedFile){
        let url = URL.createObjectURL(selectedFile);
        document.getElementById("Img").src = url;
        this.selectedFile = selectedFile;
      }
      
    },    
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

      if(this.EditingErr.length == 0){
        let obj = {whatToCall: 'saveBlog' , BlogHeader: this.BlogHeader  , BlogBody: this.BlogBody, id: this.id}
        const formData = new FormData();
        formData.append("file", this.selectedFile);  // appending file
        formData.append("file2",  JSON.stringify(obj));
        await this.$store.dispatch("SaveEditedBlog", formData);
        this.error = this.$store.state.autorisationErrors;
      }
    },  
  },
  
  //CALL FUNCTIONS ON MOUNT
  async mounted() {
      await this.IsUserLogedIn();
  },
  components: {
     BlogToEdit
  },
}
</script>