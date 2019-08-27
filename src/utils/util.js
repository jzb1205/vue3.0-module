import common from './common'

console.log(common)

const util = {
    /**
     * 非空判断.
     * @param {any} value .
     * @returns {Array} .
     */
    isEmpty: function (value) {
        if (value === '' || value === 'null' || value === null || typeof value === 'undefined' || JSON.stringify(value) === '{}') {
            return true
        }
        return false
    },

    /**
     * 一维数组去重.
     * @param {Array} arr [1, 2, 3, 4, 2, 5, 3].
     * @returns {Array} .
     */
    ArrWeightingOne: function (arr) {
        if (!Array.isArray(arr)) {
            return
        }
        let brr = Array.from(new Set(arr))
        return brr
    },
    
    /**
     * 坐标数据去重.
     * @param {Array} arr [[1, 2], [3, 4], [5, 6], [7, 8], [9, 0], [3, 4], [5,   6]].
     * @returns {Array} The sum of the two numbers.
     */
    ArrWeightingTwo: function (arr) {
        let brr = [...arr],
            crr = [],
            drr = [],
            err = []

        brr.map(item => {
            if (!Array.isArray(item)) {return}
            crr.push(item.join(','))
        })

        crr = Array.from(new Set(crr))

        crr.map(val => {
            drr.push(val ? val.split(',') : [])
        })

        drr.map(val => {
            let cur = []
            val.map(it => {
                let is = Number.parseFloat(it)
                cur.push(is)
            })
            err.push(cur)
        })

        return err
    },

    /**
     * 筛选出两坐标数组中不同的数.
     * @param {Array} arr1 [[1, 2], [3, 4], [5, 6], [7, 8]].
     * @param {Array} arr2 [[1, 2], [3, 4], [5, 6], [7, 8]].
     * @returns {Array} dif.
     */
    getDataTwoArrDif: function (arr1, arr2) {
        let combineData = arr1.concat(arr2)
        let returnData

        combineData = combineData.map(it => {
            return it.join(',')
        })
        returnData = combineData.filter(function(v, i, arr) {
            return arr.indexOf(v) === arr.lastIndexOf(v)
        })
        return common.pointToArr(returnData) 
    },

    /**
     * 筛选出两坐标数组中相同的数.
     * @param {Array} arr1 [[1, 2], [3, 4], [5, 6], [7, 8]].
     * @param {Array} arr2 [[1, 2], [3, 4], [5, 6], [7, 8]].
     * @param {number} type 0=>去重 1=>不去重
     * @returns {Array} sam.
     */
    getDataTwoArrSam: function (arr1, arr2, type=1) {
        let newArr = []
        for (let i = 0; i < arr2.length; i++) {
            for (let j = 0; j < arr1.length; j++) {
                if(arr1[j].join(',') === arr2[i].join(',')){
                    newArr.push(arr1[j].join(','))
                }
            }
        }
        newArr = type === 0 ? [...new Set(newArr)]:newArr
        
        return common.pointToArr(newArr)
    }

}
export default util