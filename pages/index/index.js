// index.js
// 获取应用实例
const app = getApp()

Page({
    num1:1,
    num2:2,
   num1change:function(e){ 
    this.num1=Number(e.detail.value);
  },
  num2change:function(e){ 
    this.num2=Number(e.detail.value);
  },
  compare:function(){
    var str = "两数比较"
    if(this.num1>this.num2){
      str = "第一个数大"
    }else if(this.num1<this.num2){
      str = "第二个数大"
    }
    this.setData({result:str})
  }
})
