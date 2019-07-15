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
  canWidtht=can1.width;
  canHeight=can1.height;
  console.log(canWidth+":"+canHeight);
  //3.3:初始化图片
  bgPic=new Image();
  bgPic.src="src/background.jpg";
  //3.4:创建海葵对象并且调用初始化方法
  ane=new aneObj();
  ane.init();
  //3.5:创建食物对象并且调用初始化的方法
  fruit =new fruitObj();
  fruit.init();
  
}
//4:创建函数gameloop 循环绘制元素
function gameloop(){
  //4.1:创建定时器调用gameloop
  requestAnimationFrame(gameloop);
  //4.4:调用监听食物数量函数
  fruitMonitor();
  //4.5调用绘制背景函数
  drawBackgroung();
  //4.6:调用绘制海葵的函数
  ane.draw();
  //4.7:调用绘制食物的函数
  fruit.draw();
}

//5:页面加载调用game
document.body.onload=game;
//6:将文件main.js添加index.html