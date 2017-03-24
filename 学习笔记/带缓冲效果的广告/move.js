function startMove(obj,json,fn)
{
	clearInterval(obj,timer);

	//20毫秒执行一次里面的方法
	obj.timer =setInterval(function ()
	{
		var bStop=true;
		//attr 选择当前物体使用哪一种方法改变
		for (var attr in json) 
		{
			//区当前的值
			var iCur =0;

			//opacity  透明度；
			if (attr =='opacity') 
			{
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100)；
			}else
			{
				iCur =parseInt(getStyle(obj,attr));
			}

			//算速度
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed =iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			//检测停止
			if (iCur != json[attr])
			{
				bStop=false;
			}
			if (attr =='opacity') 
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}else
			{
				obj.style[attr]=iCur +iSpeed+'px';
			}
		}
		if (bStop) 
		{
			clearInterval(obj.timer);
			if (fn)
			{
				fn();
			}
		}
	},20)
}
function getStyle(obj,attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		
	}
}