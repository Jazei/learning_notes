var fruitObj =function()
{
	this.alive =[];//判断果实是否存活；
	this.x=[]; //果实横坐标；
	this.y=[]; //果实纵坐标；
	this.l=[]; //控制果实的大小；
	this.speed=[]; //控制果实的速度；
	this.fruitType=[]; //控制果实的种类；
	this.orange =new Image(); //黄色果实；
	this.blue =new Image(); // 蓝色果实；
}
fruitObj.prototype.num =30; //果实的数量；
fruitObj.prototype.init =function()
{
	for (var i = 0; i < this.num; i++) 
	{
		this.alive[i] =false;
		this.x[i] =0;
		this.y[i] =0;
		this.l[i] =0;
		this.speed[i] = Math.random() *0.007+0.003;//[0.005,0.05]
		this.fruitType[i]="";
		this.born(i);
	}
	this.orange.src ="./src/fruit.png";
	this.blue.src ="./src/blue.png";
}
fruitObj.prototype.draw =function()
{
	for (var i = 0; i < this.num; i++) 
	{
		if (this.fruitType[i] =="blue") 
		{
			var pic =this.blue;
		}else
		{
			var pic =this.orange;
		}
		if (this.alive[i] ==true) 
		{
			//find an ane,grow,fly, up
			if (this.l[i] <=14) 
			{
				this.l[i] +=this.speed[i] * deltaTime;
			}else
			{	
				this.y[i] -= this.speed[i] *7 *deltaTime;
			}
			if (this.y[i] <10) 
			{
				this.alive[i] =false;
			}
			context2.drawImage(pic,this.x[i] -this.orange.width*0.5,this.y[i]-this.orange.height*0.5,this.l[i]*1.3,this.l[i]*1.3);
		}
	}
}
/*fruitObj.prototype.update =function()
{
	var num =0;
	for (var i = 0; i < this.num; i++) {
		
	}
}*/
fruitObj.prototype.born =function(i)
{
	var aneId =Math.floor(Math.random() *ane.num);
	this.x[i] =ane.x[aneId];
	this.y[i] =cHeight -ane.len[aneId];
	this.l[i] =0;
	this.alive[i]=true;
	var rdm =Math.random();
	if (rdm<0.1) 
	{
		this.fruitType[i] ="blue";
	}else
	{
		this.fruitType[i] ="orange";
	}
}
fruitObj.prototype.dead =function(i)
{
	this.alive[i] =false;
}
function fruitMonitor()
{
	var num =0;
	for (var i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]) num++;
		if (num <15) 
		{
			sendFruit();
			return;
		}
	}
}
function sendFruit()
{
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) 
		{
			fruit.born(i);
			return;
		}
	}
}