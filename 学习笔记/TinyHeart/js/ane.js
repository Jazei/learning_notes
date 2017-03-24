var aneObj =function()
{
	this.x=[]; //海葵的坐标；
	this.len=[]; //海葵的高度；
	this.move=[];
}
aneObj.prototype.num =50; //海葵的最大数量；
aneObj.prototype.init = function()
{

	for (var i = 0; i < this.num; i++) {
		this.x[i] =i*16 +Math.random() * 20;
		this.len[i]=200+ Math.random() * 50;
		this.move[i] =0;
	}
}
aneObj.prototype.draw =function()
{
	context2.save();
	context2.globalAlpha=0.6;
	for (var i = 0; i <this.num; i++) {
		//brginPath,moveTo ,lineTo, stroke,lineWidth,lineCap
		context2.beginPath();
		context2.moveTo(this.x[i],cHeight);
		context2.lineTo(this.x[i],cHeight - this.len[i]);
		context2.lineWidth =20;
		context2.lineCap ="round";
		context2.strokeStyle = "purple";
		context2.stroke();

	}
	context2.restore();
}