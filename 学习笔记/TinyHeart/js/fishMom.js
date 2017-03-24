var fishMomObj =function()
{
	this.x; //大鱼的横坐标；
	this.y; //大鱼的纵坐标；
	this.bigEye  =new Image(); //大鱼的眼睛；
	this.bigBody =new Image(); //大鱼的身体；
	this.bigTail =new Image(); //大鱼尾巴；
	this.angle;
	this.bigTailTimer =0; 
	this.bigTailCount =0;
	this.bigEyeTimer =0; 
	this.bigEyeCount =0;
	this.bigEyeInterval =1000;

	this.bigBodyTimer =0; 
	this.bigBodyCount =0;
	this.bigBodyInterval =2000;
}
fishMomObj.prototype.init =function()
{
 	this.x =cWidth *0.5; 
	this.y =cHeight *0.5;
	this.angle=0;
	this.bigEye.src="./src/bigEye0.png";
	this.bigBody.src="./src/bigSwim0.png";
	this.bigTail.src="./src/bigTail0.png";
}
fishMomObj.prototype.draw =function()
{
	//lerp 使得一个值趋向于某个字；
	this.x =lerpDistance(mx,this.x,0.98);
	this.y =lerpDistance(my,this.y,0.98);
	
	//delta angle 角度差，用来实现大鱼的转向;
	var deltaX = mx -this.x; 
	var deltaY = my -this.y;
	var beta =Math.atan2(deltaY,deltaX) + Math.PI;
	this.angle =lerpAngle(beta,this.angle,0.8);
	//大鱼尾巴；
	this.bigTailTimer += deltaTime;
	if (this.bigTailTimer >50) 
	{
		this.bigTailCount =(this.bigTailCount +1) %8;
		this.bigTailTimer %= 50;
	}
	//大鱼眼睛；
	this.bigEyeTimer += deltaTime; 
	if (this.bigEyeTimer >this.bigEyeInterval) 
	{
		this.bigEyeCount =(this.bigEyeCount +1) %2;
		this.bigEyeTimer %= this.bigEyeInterval;
		if(this.bigEyeCount ==0)
		{
			this.bigEyeInterval =Math.random()*1500+2000;
		}
		else
		{
			this.bigEyeInterval =200;
		}
	}
	//大鱼身体
	this.bigBodyTimer += deltaTime;
	if (this.bigBodyTimer >this.bigBodyInterval) 
	{
		if (this.bigBodyCount == 0)
		{
			this.bigBodyCount=0;
		}
		else
		{
			this.bigBodyCount =this.bigBodyCount -1;
			this.bigBodyTimer %= this.bigBodyInterval;
		}
	}
	if (this.bigBodyCount >= 7) 
		{
			this.bigBodyCount =7;
		}
	var bigEyeCount =this.bigEyeCount;
	var bigTailCount =this.bigTailCount;
	var bigBodyCount =this.bigBodyCount;
	context1.save();
	context1.translate(this.x,this.y);
	context1.rotate(this.angle);
	context1.drawImage(fishMomEye[bigEyeCount],-fishMomEye[bigEyeCount].width*0.5,-fishMomEye[bigEyeCount].height*0.5);
	context1.drawImage(fishMomBody[bigBodyCount],-fishMomBody[bigBodyCount].width*0.5,-fishMomBody[bigBodyCount].height*0.5);
	context1.drawImage(fishMomTail[bigTailCount],-fishMomTail[bigTailCount].width*0.5+30,-fishMomTail[bigTailCount].height*0.5);
	context1.restore();
}