//data.js
//此文件完成分数显示与增加
//1:创建分数构造函数
var dataObj=function(){
  //1.1:创建变量保存游戏分数
  this.score=0;
  //1.2:创建变量保存分数是否双倍
  this.double=1;
}
//2:为分数构造函数添加方法draw
dataObj.prototype.draw=function(){
  //2.1:获取画布的宽度和高度
  var w=canWidth;
  var h=canHeight;
  //2.2:保存画笔1状态
  ctx1.save();
  //2.3:设置画笔填充样式 白色
  ctx1.fillStyle="#fff";
  //2.4:设置字体
  ctx1.font="35px Simhei";
  //2.5:文本居中
  ctx1.textAlign="center";
  //2.6:绘制分数
  ctx1.fillText("SCORE:"+this.score,w*0.5,h*0.5-80);
  //2.7:恢复画笔1状态
  ctx1.restore();
}
//3:将data.js添加index.html文件
//4:在main.js创建分数对象并且调用相应方法
