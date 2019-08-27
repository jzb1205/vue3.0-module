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
     * 两个一维数组中筛选出相同的数和不同的数.
     * @param {Array} arr1 [1,2,3,4,2,5,3].
     * @param {Array} arr2 [1,2,3,4,2,5,3].
     * @param {number} type 0=>不同数据，1=>相同数据.
     * @returns {Array} The sum of the two numbers.
     */
    getDataFromTwoArr: function (arr1, arr2, type) {
        if (!(Array.isArray(arr1) && Array.isArray(arr2))) {return}

        let difData = [],
            samData = []

        arr1.map(it => {
            arr2.map(is => {
                if (it.toString() === is.toString()) {
                    samData.push(it)
                } else {
                    difData.push(it)
                }
            })
        })

        return type === 0 ? [...difData] : [...samData]
    }

}
export default util