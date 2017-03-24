var student = function() {
	var id;
	var name;
	var age;
	this.init = function(){
		return {
			getId:function(){
				return id;
			},
			setId:function(ids){
				id = ids;
			}
		}
	}
}

var stu = new student();
stu.init().getId();
stu.init()[]