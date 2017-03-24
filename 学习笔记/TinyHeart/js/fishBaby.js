var babyFishObj=function()
{
	this.x;	//小鱼坐标；
	this.y;	
	this.angle; //小鱼的角度；
	this.babyEye =new Image(); // 定义小鱼的图片；
	this.babyBody =new Image();
	this.babyTail =new Image();
	this.babyTailTimer =0; //小鱼尾吧摆动时间计时；
	this.babyTailCount =0;
	this.babyEyeTimer =0; //小鱼眨眼睛的计时；
	this.babyEyeCount =0;
	this.babyEyeInterval = 1000;  //小鱼眼睛持续的时间；
	this.babyBodyTimer =0; //小鱼身体变化的计时；
	this.babyBodyCount =0;
	this.babyBodyInterval =500; //小鱼血量持续和时间；
}
babyFishObj.prototype.init = function()
{
	this.x =cWidth *0.5-50;
	this.y =cHeight *0.5;
	this.angle=0;
	this.babyEye.src="./src/babyEye0.png";
	this.babyBody.src="./src/babyFade0.png";
	this.babyTail.src="./src/babyTail0.png";
}
babyFishObj.prototype.draw =function()
{
	//lerp 使得一个值趋向于某个字；
	this.x =lerpDistance(fishMom.x,this.x,0.99);
	this.y =lerpDistance(fishMom.y,this.y,0.99);
	
	//delta angle 角度差，用来实现大鱼的转向;
	var deltaX = fishMom.x -this.x; 
	var deltaY = fishMom.y -this.y;
	var beta =Math.atan2(deltaY,deltaX) + Math.PI;
	this.angle =lerpAngle(beta,this.angle,0.9);
	//小鱼尾巴
	this.babyTailTimer += deltaTime;
	if (this.babyTailTimer >50) 
	{
		this.babyTailCount =(this.babyTailCount +1) %8;
		this.babyTailTimer %= 50;
	}
	//小鱼的眼睛
	this.babyEyeTimer += deltaTime; 
	if (this.babyEyeTimer >this.babyEyeInterval) 
	{
		this.babyEyeCount =(this.babyEyeCount +1) %2;
		this.babyEyeTimer %= this.babyEyeInterval;
		if(this.babyEyeCount ==0)
		{
			this.babyEyeInterval =Math.random()*1500+2000;
		}
		else
		{
			this.babyEyeInterval =200;
		}
	}
	//小鱼的身体
	this.babyBodyTimer += deltaTime;
	if (this.babyBodyTimer >this.babyBodyInterval) 
	{
		this.babyBodyCount =(this.babyBodyCount +1) %19;
		this.babyBodyTimer %= this.babyBodyInterval; 
		/*if(this.babyBodyCount ==18)
		{	
			alert("游戏结束");
		}*/
	}
	context1.save();
	context1.translate(this.x,this.y);
	context1.rotate(this.angle);
	var babyTailCount = this.babyTailCount;
	var babyEyeCount =this.babyEyeCount;
	var babyBodyCount=this.babyBodyCount;
	context1.drawImage(fishBabyTail[babyTailCount],-fishBabyTail[babyTailCount].width *0.5 +23,-fishBabyTail[babyTailCount].height*0.5);
	context1.drawImage(fishBabyBody[babyBodyCount],-fishBabyBody[babyBodyCount].width *0.5,-fishBabyBody[babyBodyCount].height*0.5);
	context1.drawImage(fishBabyEye[babyEyeCount],-fishBabyEye[babyEyeCount].width *0.5,-fishBabyEye[babyEyeCount].height*0.5);
	context1.restore();
}