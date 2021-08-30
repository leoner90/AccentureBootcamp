 
 <!-- Get object as a props and displays it -->
<template>
<div style="width: 60%; margin: 0 auto; text-align: center;">
 <div class="error" v-for="error of EditingErr" :key="error.i" >
      {{error}}
  </div>
  <div class="page-wrapper">
      <img :src="img" id="Img" style="width: 60%; height: 200px;"/>
      <input type="file" @change="onFileChange" accept="image/png, image/jpeg, image/gif, image/jpg, image/webp, image/bmp"/>
      <h1 class="page-header">EDIT BLOG</h1>
   
        <div>
         <input name="header" type="text" :value="BlogHeader" required
            maxlength="100"
            @input='$emit("update:BlogHeader", $event.target.value)'
          />

         <input name="body" type="text" :value="BlogBody" required
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