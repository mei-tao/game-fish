//fruit.js
//功能:创建食物
//1:创建构造函数 fruitObj
var fruitObj=function(){
  //1.1:创建二个变量保存食物图片
  //蓝色食物图片
  this.blue=new Image();
  //橙色食物图片
  this.orange=new Image();
  //1.4:创建一组图片类型
  this.fruitType=[];
  //"blue","orange" 30
  //1.2创建二个变量保存食物位置 x,y
  this.x=[];
  this.y=[];
  //1.3:创建一个变量保存食物宽度
  this.l=[];
  //1.4:创建一个变量保存食物速度
  this.spd=[];
  //1.5:创建一个变量保存海葵下标
  //从第几个海葵头顶出生
  this.aneNo=[];
  //1.6:创建一个变量，保存食物状态 true显示 false隐藏
  this.alive=[];
}
//2:为构造函数添加属性 num=30
fruitObj.prototype.num=30;
//3:为构造函数添加函数init 初始化
fruitObj.prototype.init=function(){
  //3.1下载食物图片
  //蓝色 blue.png 橙色fruit.png
  this.blue.src="src/blue.png";
  this.orange.src="src/fruit.png";
  //3.2:创建循环遍历每个食物
  for(var i=0;i<this.num;i++){
    //3.3:赋值位置 状态 食物下标 宽度 食物 食物类型 速度
    //表示食物状态 false隐藏 true显示
    this.alive[i]=false;
    this.x[i]=0;
    this.y[i]=0;
    this.aneNo[i]=0;
    this.fruitType[i]=0;
    this.l[i]=0;
    this.spd[i]=0;
  }
  // console.log(this.alive);
  // console.log(this.x);
  // console.log(this.l);

}
//4:为构造函数添加函数draw 绘制
fruitObj.prototype.draw=function(){
  //4.1:创建循环遍历食物
  for(var i=0;i<this.num;i++){
    //4.2:判断是否显示食物
    if(this.alive[i]){
      //4.3:判断绘制哪张图片
      if(this.fruitType[i]=="blue"){
        var pic=this.blue;
      }else{
        var pic=this.orange;
      }
      //4.4:判断食物宽度小于14 
      //    长大
      if(this.l[i]<=14){
        //食物长大
        this.l[i]+=this.spd[i]*12;
      }else{
        //4.5:大于14向上漂浮
        this.y[i]-=this.spd[i]*12*3;
      }
      //4.6:绘制食物
      ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
      //4.7:当食物漂浮出屏幕隐藏
      if(this.y[i]<0){
        this.alive[i]=false;
      }
    }
  }
}
//5:将fruit.js添加index.html
//6:在main.js创建对象并且调用相应的方法

//描述如下功能
//初始化时没有食物可以移动
//通过程序监听画布是否有15个活动食物
//如果没有就从隐藏食物中挑一个"出生" 变成"显示"状态 x y spd fruteType .. 
//7:监听画布中显示食物数量是否不足15个
function fruitMonitor(){
  //7.1:计算累加和，计算显示食物数量
  var sum="";
  //fruit
  for(var i=0;i<fruit.num;i++){
    if(fruit.alive[i]) sum++;
  }
  //7.2:如果小于15
  //console.log(sum)
  if(sum<15){
    //7.3:挑一个
    sendFruit();
    return;
  }
}  
//8:从隐藏食物中挑一个  
function sendFruit(){
  //8.1:创建循环遍历数组
  for(var i=0;i<fruit.num;i++){
    //8.2:如果当前食物是隐藏
    if(fruit.alive[i]==false){
      //8.3:出生一次生一个
      fruit.born(i);
      //8.4:return;
      return;
    }
  }  
}
//9:出生 状态 x y spd l ...
fruitObj.prototype.born=function(i){
  //9.1:出生时食物宽度
  this.l[i]=0;
  //9.2:出生时食物状态
  this.alive[i]=true;
  //9.3:出生时食物类型
  this.fruitType[i]=Math.random()<0.9?"blue":"orange";
  //9.4:出生时海葵下标
  var idx=Math.floor(Math.random()*ane.num);
  //9.5:出生时食物位置 x y
  //食物出生在海葵 终点坐标
  this.x[i]=ane.headx[idx];
  this.y[i]=ane.heady[idx];
  //9.6:出生时指定速度
  this.spd[i]=Math.random()*0.017+0.003
}


