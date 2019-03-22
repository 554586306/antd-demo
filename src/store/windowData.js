export default {
	namespaced: true,
    state:{
        data:"",
		id:1,
		beginTop: 30,
		beginLeft: 30,
		zIndex: 1,
		openApp:{},
		activeApp: 0
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
			console.log('index:'+state.zIndex)
		},
		setOpenApp(state,val){
			state.openApp[val.appid] = val
		},
		deleteOpenApp(state,appid){
			delete state.openApp[appid]
			if(Object.keys(state.openApp)==0){
				state.zIndex = 1;
			}
		},
		setActiveApp(state,val){
			state.activeApp = val
		}
    },
}