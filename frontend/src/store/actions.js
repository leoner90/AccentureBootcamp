 const actions = {
    async Dbconnect(state,data ) {
      console.log('fetch')
      let method =  data.method;
      let mutationName = data.mutationName;
      let whatToCall = data.data.whatToCall;
      let Alldata = JSON.stringify(data.data)
      var header = {'Accept': 'application/json', 'Content-Type': 'application/json'};
      if (data.header == 0) {
        let allall = JSON.parse(data.data.get('file2'));
        whatToCall = allall.whatToCall
        Alldata = data.data;
        header = {}
      } 
      const response = await fetch(`http://localhost:3000/${whatToCall}`,{
          method ,
          headers: header,
          mode: 'cors',
          credentials: 'include',
          body: Alldata
      });  
      let result = await response.json();
      if(result == true) {
        state.isLogedIn = true;
      }
      await state.commit(mutationName,  result  );
    },
   
    async fetchBlogs({state, dispatch,commit }, data) {
        if(state.curentPostCount + state.PostLimits > state.blogs.length){
          //if last posts allready loaded on home page , then just get last three posts from memory
          if((state.blogs.length < state.AllBlogsInDb) || ( state.AllBlogsInDb == null) ){
            if(state.blogs.length + state.lastBlogs.length >= state.AllBlogsInDb && state.AllBlogsInDb != null){
              commit('GetLastBlogsForAllPAge');
            } else {
              await dispatch('Dbconnect', {data:data , method:'POST', mutationName: 'UpdateBlogs' });
            }
          }
        } else {
          commit('Todo');
        }
    },
    async getLastPosts({state,dispatch,commit }, data) {
      if(state.lastBlogs.length == 0 ){
        //if all data allready loaded on all post page , then just get last three posts from memory
        if(state.AllBlogsInDb  == state.blogs.length){
          commit('GetLastBlogsFromMemory',-3);
        } else {
          await dispatch('Dbconnect', {data:data, method:'POST', mutationName: 'LastUpdateBlogs' });
        }
      }
    },
    async LogingIn({dispatch }, data) {
      await dispatch('Dbconnect', {data:data, method:'POST', mutationName: 'LogInStatusUpdate' });
    },
    async UserRegistration({dispatch }, data) {
      await dispatch('Dbconnect', {data:data, method:'POST', mutationName: 'LogInStatusUpdate' });
    },
    async LogOutAction({dispatch }, data) {
      await dispatch('Dbconnect', {data:data, method:'POST', mutationName: 'LogOut' });
    },
    async IsUserLogedIn({dispatch }, data) {
      await dispatch('Dbconnect', {data:data , method:'POST', mutationName: 'LogInStatusUpdate' });
    },
    async AddnewBlog({dispatch}, formData) {
      await dispatch('Dbconnect', {data:formData , method:'POST', mutationName: 'AddnewBlog' ,header : 0});
    },
    async GetAllSpecificUserBlogs({dispatch}, data) {
      await dispatch('Dbconnect', {data:data , method:'POST', mutationName: 'GetAllSpecificUserBlogs'});
    },
    async DeleteBlog({dispatch}, data) {
      await dispatch('Dbconnect', {data:data , method:'POST', mutationName: 'DeleteBlogMutatation'});
    },
    async SaveEditedBlog({dispatch}, data) {
      console.log('gagaa')
      await dispatch('Dbconnect', {data:data , method:'POST', mutationName: 'SaveEditedBlogMutation',header : 0});
    },
    async getBlogByID({dispatch}, data) {
      await dispatch('Dbconnect', {data:data , method:'POST', mutationName: 'getBlogByID'});
    }
  }
 

export default actions;