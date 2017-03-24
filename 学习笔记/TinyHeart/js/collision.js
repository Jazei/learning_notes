function fruitMomCollision()  //大鱼与果实的碰撞检测；
{
	for (var i = 0; i < fruit.num; i++) 
	{
		if (fruit.alive[i])
		{
			//calculate length
			var l =calLength2(fruit.x[i],fruit.y[i],fishMom.x,fishMom.y);
			if(l < 900)
			{
				fruit.dead(i);
				fishMom.bigBodyCount ++;
			}
		}	
	}
}
function momBabyCollision()
{
	var l =calLength2(fishMom.x,fishMom.y,fishBaby.x,fishBaby.y);
	if(l < 900)
	{
		fishBaby.babyBodyCount =0;
		fishMom.bigBodyCount =0;
	}
}