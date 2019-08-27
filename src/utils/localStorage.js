
const localStorage = {
	
    /**
     * 设置LocalStorage.
     * @param {string} name .
     * @param {string} value .
     * @returns {null} .
     */
    setLocalStorage: function (name, value) {
        if (typeof value !== 'string') {
            window.localStorage.setItem(name, JSON.stringify(value))
        } else {
            window.localStorage.setItem(name, value)
        }
    },

    /**
     * 删除LocalStorage.
     * @param {string} name .
     * @returns {null} .
     */
    delLocalStorage: function (name) {
        window.localStorage.removeItem(name)
    },

    /**
     * 获取LocalStorage.
     * @param {string} name .
     * @returns {string} .
     */
    getLocalStorage: function (name) {
        return window.localStorage.getItem(name)
    },
    clearLocalStorage: function () {
        window.localStorage.clear()
    },
}

export default localStorage