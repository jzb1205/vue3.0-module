<template>
  <div id="home">
	 <p>测试element-ui和layui：<el-button type="primary" @click='pop()'>element-btn</el-button></p>
	 <p>测试moment：{{time | timeFormat('YYYY-MM-DD hh:mm:ss')}}</p>

  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
  	return {
  		time: new Date(),
        timer:null,
        arr: [1,2,3,4,2,5,3],
        arr1: [[1,2],[3,4],[5,6],[7,8],[9,0],[3,4],[5,6]],
        arr2: [1,2,3,4,2,5,3],
        brr3: [1,2,3,4,2,5,3,6,7,8,9]
  	}
  },
  created(){
    this.timer = this.timeChange()
    this.ArrWeightingOne(this.arr)
    this.ArrWeightingTwo(this.arr1)
    this.getDataFromTwoArr(this.arr2,this.brr3,0)
    this.getDataFromTwoArr(this.arr2,this.brr3,1)
  },
  methods:{
	  pop(){
		  layer.confirm('您是如何看待前端开发？', {
            btn: ['重要','奇葩'] //按钮
        }, function(){
            layer.msg('的确很重要', {icon: 1});
        }, function(){
            layer.msg('也可以这样', {
                time: 20000, //20s后自动关闭
                btn: ['明白了', '知道了']
            });
        });
	  },
	  timeChange(){
		  setInterval(()=>{
			  this.time = new Date()
		  },1000)
      },
      ArrWeightingOne(arr){
          console.log(this.$util.ArrWeightingOne(arr))  
      },
      ArrWeightingTwo(arr){
          console.log(this.$util.ArrWeightingTwo(arr))  
      },
      getDataFromTwoArr(arr1,arr2,type){
          console.log(this.$util.getDataFromTwoArr(arr1,arr2,type))  
      }
      
  },
  destoryed(){
	  clearInterval(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
