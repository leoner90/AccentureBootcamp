<template>
<div>
    <Addblog  
        v-model='BlogHeader' 
        v-model:BlogBody='BlogBody' 
        :response="response" 
        :onFileChange="onFileChange"   
        :saveNewBlog="saveBlog"
        :EditingErr="EditingErr"
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
        }
    },
    methods: { 
        //ON SAVING CALLS THE FUNCTION TO ADD BLOG TO DB ,THEN DISPLAYS RESULT MSG AND WIPES INPUT VALUES
        async saveBlog() {
            this.EditingErr = [];
            //img check
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
                let data = {whatToCall: 'AddBlog' , BlogHeader: this.BlogHeader, BlogBody: this.BlogBody};
                const formData = new FormData();
                formData.append("file", this.selectedFile);  // appending file
                formData.append("file2",  JSON.stringify(data));
                await this.$store.dispatch("AddnewBlog", formData);
                this.response = this.$store.state.susseccMsg;
                this.BlogHeader = '';
                this.BlogBody = '';
            }
        },
       
        async onFileChange(e) {
            document.getElementById("imgPrewContainer").style.opacity = 1;
            const selectedFile = e.target.files[0]; // accessing file
            if(selectedFile){
                let url = URL.createObjectURL(selectedFile);
                document.getElementById("imagePrew").src = url;
                this.selectedFile = selectedFile;
            }
             
            
        },
        //ON MOUNTED CHECKS IS USER LOGED IN , IF SO - SHOWS FORM FOR ADDING NEW BLOGS
        async IsUserLogedIn() {
           let isLoged = this.$store.state.isLogedIn;
            if (!isLoged) {
                this.$router.push('/Login');
            }
        }
    },
    components:{
        Addblog,
    },
    mounted() {
        this.IsUserLogedIn();
    }
}
 </script>