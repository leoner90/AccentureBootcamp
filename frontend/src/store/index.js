import { createStore } from "vuex";
import state from "./states";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
export default createStore({
  strict : true,
  state,
  getters,
  mutations,
  actions,
});


