

let localStorage = {
	/**
	 * 设置LocalStorage
	 */
	setLocalStorage: function(name, value) {
	    if(typeof value !== 'string'){
			window.localStorage.setItem(name, JSON.stringify(value))
	    }else {
			window.localStorage.setItem(name, value)
	    }
	},
	/**
	 * 删除LocalStorage
	 */
	delLocalStorage: function(name) {
	    window.localStorage.removeItem(name)
	},
	/**
	 * 获取LocalStorage
	 */
	getLocalStorage: function(name) {
		return window.localStorage.getItem(name)
	},
	/**
	 * 清除所有LocalStorage
	 */
	clearLocalStorage: function() {
		window.localStorage.clear()
	},
}

export default localStorage