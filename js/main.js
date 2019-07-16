//main.js
//1:声明所有全局变量
var can1;//画布1
var can2;//画布2
var ctx1;//画笔1
var ctx2;//画笔2
var canWidth;//画布宽度
var canHeight;//画布高度
var bgPic;//背景图片
//1.1:创建全局变量保存海葵
var ane;
//1.2:创建全局变量保存食物
var fruit;
//1.3:创建全局变量保存大鱼
var mom;
//1.4:创建全局变量保存分数
var data;
//2:创建函数game 第一个执行函数
function game(){
  init();
  gameloop();
}
//入口函数
//3:创建函数init 初始化
function init(){
  //3.1:初始化二个画布 二支画笔
  can1=document.getElementById("canvas1");
  can2=document.getElementById("canvas2");
  ctx1=can1.getContext("2d");
  ctx2=can2.getContext("2d");
  //3.2:初始化宽高
  canWidth=can1.width;
  canHeight=can1.height;
  //3.3:初始化图片
  bgPic=new Image();
  bgPic.src="src/background.jpg";
  //3.4:创建海葵对象并且调用初始化方法
  ane=new aneObj();
  ane.init();
  //3.5:创建食物对象并且调用初始化的方法
  fruit =new fruitObj();
  fruit.init();
  //3.6:创建大鱼对象并且调用初始化的方法
  mom =new momObj();
  mom.init();
  //3.7:创建鼠标移动监听，绑定画布1上
  can1.addEventListener("mousemove",canHandler);
  //3.8:创建分数对象
  data=new dataObj();
}
//4:创建函数gameloop 循环绘制元素
function gameloop(){
  //4.1:创建定时器调用gameloop
  requestAnimationFrame(gameloop);
  //4.3:清除画布1操作
  ctx1.clearRect(0,0,canWidth,canHeight);
  //4.3.1:完成碰撞检测
  momFruitsCollsion();
  //4.4:调用监听食物数量函数
  fruitMonitor();
  //4.5调用绘制背景函数
  drawBackgroung();
  //4.6:调用绘制海葵的函数
  ane.draw();
  //4.7:调用绘制食物的函数
  fruit.draw();
  //4.8:调用绘制食物的函数
  mom.draw();
  //4.9:调用绘制分数的函数
  data.draw();
}

//5:页面加载调用game
document.body.onload=game;
//6:将文件main.js添加index.html
//6.1:创建二个全局变量保存鼠标位置
var mx=0;
var my=0;
//7:鼠标移动画布事件处理函数
function canHandler(e){
  //7.1:获取鼠标x位置
  var x=e.offsetX;
  //7.2:获取鼠标y位置
  var y=e.offsetY;
  //7.3:将鼠标x与y位置赋值 全局变量mx,my
  mx=x;
  my=y;
}