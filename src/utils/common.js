const common = {
    /**
     * 字符串形式的坐标转化成数字型.
     * @param {Array} data ["1,2", "3,4", "5,6", "7,8"] =>[[1,2], [3,4], [5,6], [7,8]]
     * @returns {Array} .
     */
    pointToArr: function (data) {
        let returnData = []
        returnData = data.map(it=>{
            return it.split(',').map(is=>{
                return Number(is)
            })
        })
        return returnData
    }

}
export default common