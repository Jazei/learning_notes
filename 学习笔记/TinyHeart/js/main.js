var canvas1; //画布1，绘制画鱼，漂浮物，界面UI，圆圈；
var canvas2; //画布2，绘制游戏背景，海葵，果实；

var context1; //画布1的画笔；
var context2; //画布2的画笔；

var lastTime; //时间控制帧数，最后时间；
var deltaTime;//间隔时间，代表每间隔deltaTime重新绘制一次。类似FPS；

var bgPic; //背景图片；
var cWidth; //画布宽度；
var cHeight; //画布高度；

var ane; //海葵对象；
var fruit; //果实对象；

var fishMom; //鱼妈妈对象；
var fishMomTail =[]; //鱼妈妈尾巴图组；
var fishMomEye =[]; //鱼妈妈眼睛图组；
var fishMomBody =[]; //鱼妈妈身体图组；

var fishBaby; //鱼宝宝对象
var fishBabyTail =[]; //鱼宝宝尾巴图组
var fishBabyEye =[]; //鱼宝宝眼睛图组
var fishBabyBody =[]; //鱼宝宝身体图组

var mx; //鼠标横向位置；
var my; //鼠标纵向位置；
document.body.onload=game; //game()为整个游戏的入口；
function game()
{
	init();
	lastTime =Date.now(); //获取当前时间
	deltaTime =0; 
	gameLoop(); 
}
function getId(name) //获取元素ID对象；
{
	return document.getElementById(name);
}
function init() //初始化；
{
	//获取canvas context
	canvas1 = getId("canvas1");
	context1 = canvas1.getContext('2d'); //负责 fishes ,dust, UI, Circle；
	canvas2 = getId("canvas2");
	context2 = canvas2.getContext('2d'); //负责背景,ane,fruits;
	
	canvas1.addEventListener('mousemove',onMouseMove,false); //添加画布上的鼠标监听事件；

	bgPic =new Image();
	bgPic.src="src/background.jpg"
	
	cWidth =canvas1.width;
	cHeight =canvas1.height;

	mx =cWidth *0.5;  //鼠标的横坐标；
	my =cHeight *0.5; //鼠标的纵坐标；
	//实例海葵；
	ane =new aneObj();
	ane.init();
	//实例果实对象；
	fruit =new fruitObj();
	fruit.init();
	//实例大鱼对象
	fishMom =new fishMomObj();
	fishMom.init();
	//实例小鱼对象；
	fishBaby =new babyFishObj();
	fishBaby.init();
	
}
function gameLoop() // 循环绘制场景
{
	//绘制图片的计时器；当中为16~18 FPS
	window.requestAnimFrame(gameLoop);
	var now =Date.now();
	
	deltaTime =now -lastTime;
	lastTime =now;
	if (deltaTime >40)deltaTime=40;
	drawBackground(); //画背景；
	ane.draw();  //画海葵；
	fruitMonitor(); //果实池，当果实超出屏幕将进行重画；
	fruit.draw(); //画果实；
	context1.clearRect(0,0,cWidth,cHeight); //清空画布；
	//实例化鱼妈妈尾巴图片；
	(function(){
		for (var i = 0; i <8; i++) {
			fishMomTail[i] =new Image();
			fishMomTail[i].src="./src/bigTail"+i+".png";
		}
	})();

	(function(){
		for (var i = 0; i <2; i++) {
			fishMomEye[i] =new Image();
			fishMomEye[i].src="./src/bigEye"+i+".png";
		}
	})();

	(function(){
		for (var i = 0; i <8; i++) {
			fishMomBody[i] =new Image();
			fishMomBody[i].src="./src/bigSwim"+i+".png";
		}
	})();
	fishMom.draw(); //绘制大鱼；

	fruitMomCollision();  //当果实超出了画布将置入dead;
	momBabyCollision();
	//加载小鱼尾巴的图片；
	(function(){
		for (var i = 0; i <8; i++) {
		fishBabyTail[i] =new Image();
		fishBabyTail[i].src ="./src/babyTail"+i+".png" ;
		}
	})();
	//加载小鱼眼睛的图片；
	(function(){
		for (var i = 0; i < 2; i++) {
			fishBabyEye[i]=new Image();
			fishBabyEye[i].src="./src/babyEye"+i+".png";
		}
	})();
	//加载小鱼身体的图片；
	(function(){
		for (var i = 0; i < 19; i++) {
			fishBabyBody[i]=new Image();
			fishBabyBody[i].src="./src/babyFade"+i+".png";
		}
	})();
	fishBaby.draw(); //绘制小鱼；
}
function onMouseMove(e)
{
	if (e.offSetX || e.layerX)
	{

		mx =e.offSetX ==undefined ?e.layerX : e.offSetX;
		my =e.offSetY ==undefined ?e.layerY : e.offSetY;
	}
}