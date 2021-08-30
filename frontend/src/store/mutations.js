import router from '@/router/'
  const mutations =  {
    UpdateBlogs(state, result ) {
      state.AllBlogsInDb = result.total;
      for(let i = 0; i < result.rows.length; i++ ) {
        state.blogs.push(result.rows[i])
      }  
      for(let i =  state.curentPostCount; i <  state.blogs.length; i++ ) {    
        state.blogs[i].img =  'data:image/png;base64,' + state.blogs[i].img.data;
        console.log('UpdateBlogs')
      }
      state.curentPostCount = state.curentPostCount + state.PostLimits;

    },
    LogInStatusUpdate(state,result) {
      if(result === true) {
        state.isLogedIn = true;
      } else {
        state.autorisationErrors = result;
      }
    },
    LogOut(state,result) {
      state.isLogedIn = result;
    },
    LastUpdateBlogs(state,result){
        for(let i = 0; i < result.rows.length; i++ ) {
          state.lastBlogs.push(result.rows[i])
          state.lastBlogs[i].img =  'data:image/png;base64,' + state.lastBlogs[i].img.data;
        }    
    },
    GetLastBlogsFromMemory(state,howMany){
      state.lastBlogs  = state.blogs.slice(howMany);
      console.log(state.lastBlogs)
    },

    GetLastBlogsForAllPAge(state){
      var howMany = state.blogs.length + state.lastBlogs.length - state.AllBlogsInDb;
      let xxxx  = state.lastBlogs.slice(howMany);
      console.log('GetLastBlogsForAllPAge');
      for(let i = 0; i < xxxx.length; i++ ) {
        state.blogs.push(xxxx[i])
      }  
    },

    AddnewBlog(state,result){
      state.susseccMsg = result;
    },

    GetAllSpecificUserBlogs(state,result) {
      state.ThisUserBlogs = result.rows;   
      for(let i =  0; i < state.ThisUserBlogs.length; i++ ) {    
        state.ThisUserBlogs[i].img =  'data:image/png;base64,' + state.ThisUserBlogs[i].img.data;
      }
    },
    DeleteBlogMutatation(state,result) {
      if (result){
        location.reload();
        
      } else {
        alert('You Have No Permisions');
      }
    },
    SaveEditedBlogMutation(state,result){
      if (result){
        router.push('/UserBlogs');
      } else {
        state.autorisationErrors = result;
      }
    },
    getBlogByID(state,result){
      if (result.length > 0) {
        state.ThisUserBlogs = result;
        // to fix delete blog img
        state.ThisUserBlogs[0].img = 'data:image/png;base64,' + state.ThisUserBlogs[0].BlogImg;
        state.autorisationErrors = false;
      } else {
        //redirect to ERROR PAGE?
        state.autorisationErrors = true;
      }
    } , 
    Todo(state){
      state.curentPostCount = state.curentPostCount + 2;
    }
  }

 
export default mutations;