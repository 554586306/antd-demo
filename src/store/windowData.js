export default {
	namespaced: true,
	state: {
		data: "",
		id: 1,
		beginTop: 30,
		beginLeft: 30,
		zIndex: 1,
		openApp: [],
		activeApp: 0,
		showDrawer: false
	},
	mutations: {
		setdata(state, val) {
			state.data = val;
		},
		setId(state, val) {
			state.id ++;
		},
		setPosition(state, val) {
			state.beginTop += 5;
			state.beginLeft += 5;
		},
		setzIndex(state, val) {
			state.zIndex ++;
			console.log('index:' + state.zIndex)
		},
		setOpenApp(state, val) {
			state.openApp.push(val)
		},
		deleteOpenApp(state, appid) {
			for (var i = 0; i < state.openApp.length; i++) {
				if (state.openApp[i].appid == appid) {
					state.openApp.splice(i, 1)
				}
			}
			if (state.openApp.length == 0) {
				state.zIndex = 1;
			}
		},
		setActiveApp(state, appid) {
			state.activeApp = appid
		},
		setVisible(state, appid) {
			var visible = null
			for (var i = 0; i < state.openApp.length; i++) {
				if (state.openApp[i].appid == appid) {
					state.openApp[i].visible = !state.openApp[i].visible // 显示/隐藏
					visible = state.openApp[i].visible
					break;
				}
			}
			if (visible == false) { // 最小化，就改变activeApp的num
				var zIndex = -1;
				var showAppid = -1;
				for (var i = 0; i < state.openApp.length; i++) {
					if (state.openApp[i].visible == true) {
						if(state.openApp[i].zIndex>zIndex){
							zIndex = state.openApp[i].zIndex
							showAppid = state.openApp[i].appid
						}
					}
				}
				if(showAppid!=-1){
					this.commit('windowData/setActiveApp', showAppid)
				}
			}
		},
		setShowDrawer(state, val) {
			state.showDrawer = !state.showDrawer
		},
	},
}
