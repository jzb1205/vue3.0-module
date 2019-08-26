let util =  {
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
    /**
	 *  一维数组去重
	 *  arr: [1,2,3,4,2,5,3],
	 */
    ArrWeightingOne:function(arr){
        if (!Array.isArray(arr)) return;
        let brr = Array.from(new Set(arr))
        return brr
    },
    /**
	 *  坐标数据去重
	 *  arr: [[1,2],[3,4],[5,6],[7,8],[9,0],[3,4],[5,6]],
     *  思路：内层数组拼接成字符串，去重，再拼接回源数据格式，元素字符串转化成数字
	 */
    ArrWeightingTwo:function(arr){
        let brr = Object.assign([],arr), 
            crr = [],   
            drr = [],   
            err = []
        brr.map(item=>{
            if (!Array.isArray(item)) return;
            crr.push(item.join(','))
        })
        crr = Array.from(new Set(crr)) 
        crr.map(val=>{                  
            drr.push(val?val.split(','):[])
        })
        drr.map(val=>{    
            let cur = []
            val.length>0 && val.map(it=>{
                it = Number.parseFloat(it)
                cur.push(it)
            })
            err.push(cur)
        })
        return err
    }
}
export default util 