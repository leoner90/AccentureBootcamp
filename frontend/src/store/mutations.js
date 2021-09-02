import router from '@/router/'
const mutations =  {
  //ON PAGE REFRESH CHECK DOES USER HAVE SESSION , AND CHECK IS HE LOGED IN
  OnPageLoadCheckUserAuthStatus(state,result) {
    if(result === true) {
      state.isLogedIn = true;
    }
  },
  //ALL BLOG PAGE MUTATION FUN
  UpdateBlogs(state, result ) {
    if(result.rows.length != 0){
      state.AllBlogsInDb = result.total;
      for(let i = 0; i < result.rows.length; i++ ) {
        state.blogs.push(result.rows[i])
      }  
      for(let i =  state.curentPostCount; i <  state.blogs.length; i++ ) {    
        state.blogs[i].img =  'data:image/png;base64,' + state.blogs[i].img.data;
      }
      state.curentPostCount = state.curentPostCount + state.PostLimits;
    } else {
      state.AllBlogsInDb = 0;
      alert('No Blogs Yet!')
    }
  },
  //ON REGISTRATION OR LOGIN UPDATEs isLogedIn STATUS as true
  LogInStatusUpdate(state,result) {
    if(result === true) {
      state.isLogedIn = true;
      location.reload();
    } else {
      state.autorisationErrors = result;
    }
  },
  //LOGOUT DELETES SESSION ON SERVER SIDE AND SETS LOGIN STATUS AS FALSE , reload the page
  LogOut(state,result) {
    state.isLogedIn = result;
    location.reload();
  },
  //HOME PAGE MUTATION FUN
  LastUpdateBlogs(state,result){
    if(result.rows.length != 0){
      for(let i = 0; i < result.rows.length; i++ ) {
        state.lastBlogs.push(result.rows[i])
        state.lastBlogs[i].img =  'data:image/png;base64,' + state.lastBlogs[i].img.data;
      }
    } else {
      alert('NO BLOGS YET')
    }
  },
  //HOME PAGE MUTATION FUN IF ALL DATA ALLREADY LOADED FROM DB
  GetLastBlogsFromMemory(state,howMany){
    state.lastBlogs  = state.blogs.slice(howMany);
    console.log('GetLastBlogsFor Home page FROM MEMORY');
  },
  //ALL BLOG PAGE , IF THERE IS LAST 3 POSTS FROM HOME PAGE LOAD THEM FROM MEMORY
  GetLastBlogsForAllPAge(state){
    var howMany = state.blogs.length + state.lastBlogs.length - state.AllBlogsInDb;
    let howManyBlogNeeded  = state.lastBlogs.slice(howMany);
    console.log('GetLastBlogs For AllPAge FROM MEMORY');
    for(let i = 0; i < howManyBlogNeeded.length; i++ ) {
      state.blogs.push(howManyBlogNeeded[i])
    }  
  },
  //ADD NEW BLOG TO DB
  AddnewBlog(state,result){
    state.susseccMsg = result;
    state.lastBlogs = [];
    state.ThisUserBlogs = [];
    state.blogs = [];
    state.curentPostCount = 0;
  },
  //GET CURENT USER BLOGS
  GetAllSpecificUserBlogs(state,result) {
    if(result.length != 0) {
      state.ThisUserBlogs = result;   
      for(let i =  0; i < state.ThisUserBlogs.length; i++ ) {    
        state.ThisUserBlogs[i].img =  'data:image/png;base64,' + state.ThisUserBlogs[i].img.data;
      }
    } else {
      state.autorisationErrors = 'YOU DON\'T HAVE ANY BLOGS YET!';
    }
  },
  //DELETE BLOG MUTATION FUN
  DeleteBlogMutatation(state,result) {
    if (result){
      location.reload();
    } else {
      alert('You Have No Permisions');
    }
  },
  //UPDATE EXISTING BLOG
  SaveEditedBlogMutation(state,result){
    if(result) {
      state.lastBlogs = [];
      state.ThisUserBlogs = [];
      state.blogs = [];
      state.curentPostCount = 0;
      router.push('/UserBlogs');
    } else {
      state.autorisationErrors = result;
    }
  },
  //GET ONE BLOG BY ID FOR EDIT PAGE OR FOR SINGLE PAGE VIEW
  getBlogByID(state,result){
    if(result) {
      state.SignleBlog = result;
      state.SignleBlog[0].img = 'data:image/png;base64,' + state.SignleBlog[0].BlogImg;
    } else {
      state.RightsForPostChange = true;
    }
  }
}

export default mutations;