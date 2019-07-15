//ane.js海葵文件
//1:创建海葵构造函数 aneObj
var aneObj=function(){
  this.x=[];//保存海葵x坐标
  this.len=[];//保存海葵高度
}
//2:为构造函数原型添加属性num=50
aneObj.prototype.num=50;
//3:为构造函数原型添加方法init
aneObj.prototype.init = function(){
  //为海葵x与高度赋值
  for(var i=0;i<this.num;i++){
    this.x[i]=i*16+Math.random()*20;
    this.len[i]=200+Math.random()*50;
  }
}

//4:为构造函数原型添加方法draw
aneObj.prototype.draw = function(){
  //4.1:保存状态
  ctx2.save();
  //设置边线样式 紫色
  ctx2.strokeStyle="#3b154e";
  //设置边线宽度
  ctx2.lineWidth=20;
  //设置边线顶端样式，圆角
  ctx2.lineCap="round";
  //设置透明度
  ctx2.globalAlpha=0.7;
  for(var i=0;i<this.num;i++){
    //开始一条新路径
    ctx2.beginPath();
    ctx2.moveTo(this.x[i],canHeight);
    ctx2.lineTo(this.x[i],canHeight-this.len[i]);
    ctx2.stroke();
  }
  //4.7:恢复状态
  ctx2.restore();
}
//5:将ane.js文件添加index.html
//6:在main.js创建对象并且调用相关方法
