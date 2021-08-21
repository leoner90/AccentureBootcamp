<template>
    <div class="page-wrapper">
      <h1 class="page-header">EDIT BLOG</h1>
      Header
      <div><input v-model="BlogHeader" /></div>
      Body
      <div><input v-model="BlogBody" /></div>
      <button class="Save-changes-btn" @click="saveChanges(id)"> SAVE CHANGES </button>
  </div>
</template>

<script>
//Server Side Functions Import
import ServerFunctions from '@/ServerSideFunctions/ServerFunctions.vue';

export default {
  data() { 
    return {
      BlogHeader: '',
      BlogBody: '',
      id: '',
      obj: {},
    }
  },

  methods:{
    //CHECKS IS USER LOGED IN ON MOUNTED , IF NOT - REDIRECTS TO MAIN PAGE
    async IsUserLogedIn() {
      let obj = {whatToCall: 'IslogedIn' }
      this.isLoged = await ServerFunctions.serverCall(obj);
      if (!this.isLoged) {
        await this.$router.push('/');
      } else {
          await this.getBlogForEditing() ;
      }
    },

    //GET BLOG FOR CHANGE BY ID(FROM QUERY)
    async getBlogForEditing() {
        let obj = {whatToCall: 'getBlogByID', id : this.$route.query.id }
        let result = await ServerFunctions.serverCall(obj);
        this.BlogHeader = result[0].BlogHeader;
        this.BlogBody = result[0].BlogBody;
        this.id = result[0].id_blogs;
    },

    //MAKES OBJECT FROM INPUT VALUES AND SAVE THEM INTO DB USING SERVER SIDE FUNCTIONS
    async saveChanges(id) {
      let obj = {whatToCall: 'saveBlog' , BlogHeader: this.BlogHeader  , BlogBody: this.BlogBody, id: id}
      let result = await ServerFunctions.serverCall(obj);

      if (result){
        await this.$router.push('/UserBlogs');
      } else {
        alert('You Have No Permisions');
      }
    }
  },
  
  //CALL FUNCTIONS ON MOUNT
  mounted() {
      this.IsUserLogedIn();
      this.getBlogForEditing()
  }
}
</script>

<style scoped>
input {
  min-width: 500px;
  min-height: 125px;
  padding: 10px;
  border-radius: 5px;
}

.page-wrapper {
  text-align: center;
}

.Save-changes-btn {
  font-weight: bold;
  background: lightgreen;
  padding: 7px 18px;
  border-radius: 20px;
  margin-top: 5px;
  cursor: pointer;
}
</style>