/**
 * 公共方法，工具方法
 *
 * */

export default util = {
	/**
	 * 设置sessionStorage
	 */
	setSessionStorage: function(name, value) {
	    if(typeof value !== 'string'){
	      sessionStorage.setItem(name, JSON.stringify(value))
	    }else {
	      sessionStorage.setItem(name, value)
	    }
	},
	/**
	 * 删除sessionStorage
	 */
	delSessionStorage: function(name) {
	    sessionStorage.removeItem(name)
	},
	/**
	 * 获取sessionStorage
	 */
	getSessionStorage: function(name) {
		return sessionStorage.getItem(name)
	},
	/**
	 * 清除所有sessionStorage
	 */
	clearSessionStorage: function() {
		sessionStorage.clear()
	},
	/**
	 *  非空判断
	 *  value: 需要判断的值
	 */
	isEmpty: function (value) {
	    if (value == '' || value == 'null' || value == null || typeof value == 'undefined' || JSON.stringify(value) == '{}') {
	        return true;
	    } else {
	        return false;
	    }
	},
}