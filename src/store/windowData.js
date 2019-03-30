export default {
	namespaced: true,
	state: {
		data: {},
		id: 1,
		beginTop: 100,
		beginLeft: 100,
		zIndex: 0,
		openApp: [],
		activeApp: 0,
		showDrawer: false,
	},
	mutations: {
		setdata(state, val) {
			state.data = val;
		},
		setId(state, val) {
			state.id ++;
		},
		setPosition(state, val) {
			state.beginTop += 30;
			state.beginLeft += 20;
			if(state.beginTop + val.height>document.body.clientHeight || state.beginLeft + val.width>document.body.clientWidth){
				state.beginTop = 100;
				state.beginLeft = 100;
			}
		},
		setzIndex(state, val) {
			state.zIndex ++;
			// console.log('index:'+ state.zIndex)
		},
		setOpenApp(state, val) {
			state.openApp.push(val)
		},
		deleteOpenApp(state, appid) {
			for (var i = 0; i < state.openApp.length; i++) {
				if (state.openApp[i].appid == appid) {
					delete state.openApp[i].width
					delete state.openApp[i].height
					delete state.openApp[i].left
					delete state.openApp[i].top
					state.openApp.splice(i, 1)
					state.zIndex --;
				}
			}
// 			if (state.openApp.length == 0) {
// 				state.zIndex = 0;
// 			}
		},
		setActiveApp(state, appid) {
			state.activeApp = appid
			var z;
			for (var i = 0; i < state.openApp.length; i++) {
				if (state.openApp[i].appid == appid) {
					z = state.openApp[i]
				}
			}
			
			for (var i = 0; i < state.openApp.length; i++) {
				if (state.openApp[i].zIndex > z.zIndex) {
					state.openApp[i].zIndex --
				}
			}
			z.zIndex = state.zIndex
		},
		setVisibleAlways(state, appid) {  // 总是显示
			for (var i = 0; i < state.openApp.length; i++) {
				if (state.openApp[i].appid == appid) {
					state.openApp[i].visible = true // 显示/隐藏
					break;
				}
			}
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
