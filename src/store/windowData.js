export default {
	namespaced: true,
    state:{
        data:"",
    },
    mutations:{
        setdata(state,val){
            state.data = val;
        },
    },
}