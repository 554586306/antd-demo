export default {
	namespaced: true,
    state:{
        data:"",
		id:1,
		beginTop: 30,
		beginLeft: 30,
		zIndex: 1,
		openId:[]
    },
    mutations:{
        setdata(state,val){
            state.data = val;
        },
		setId(state,val){
		    state.id += 1;
		},
		setPosition(state,val){
		    state.beginTop += 5;
		    state.beginLeft += 5;
		},
		setzIndex(state,val){
		    state.zIndex += 1;
		},
		setOpenId(state,val){
			state.openId.push(val)
		},
    },
}