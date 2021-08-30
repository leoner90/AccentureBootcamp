import state from "./states";

const   getters = {
  ReturnBlogs(state) {
      return state.blogs;
  },
  ReturnlastBlogs(){
      return state.lastBlogs;
  },
  IslogedInGetter(){
    return state.isLogedIn;
  }
}
 

  export default getters;
