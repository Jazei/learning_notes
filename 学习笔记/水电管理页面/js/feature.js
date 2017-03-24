var feature = {
	//特效功能
	ftures:function(){
		$(function(){
		$(".conleft dl dd").click(function(event) {
			$(this).addClass('current');
			$(".bannertop p").text($(this).text());
			$(this).siblings().removeClass('current');
			$(this).attr("datas");
			$(this).load();
			

		});
		$("input[name='allchecked']").click(function(){
			if ($(this).prop('checked')) {
  		 	$("input[type=checkbox]").attr("checked",true);
  		 	}
  		 	else{
  		 	$("input[type=checkbox]").attr("checked",false);	
  		 	}
  		 })
		$(".mg").delegate("span","click",function() {
			var pageing = $(this).attr("pageing");
			$("#replace").load(pageing,function(response,status,xhr){
				$("#repalce").html(response);

				$(this).next().addClass('current');
				$(this).siblings().removeClass('current');
			});
			
		});
		$("#new").click(function(event) {
			$(".bgs").css('display', 'block');
			$(".mycar-list").css('display', 'block');
		});

		$("#exl").click(function(event) {
			$(".bgs").css('display', 'block');
			$(".mycar-list2").css('display', 'block');
		});

		$(".bgs").click(function(event) {
			$(this).css('display', 'none');
			$(".conbg").css('display', 'none');
			$(".mycar-list,.mycar-list2").css('display', 'none');
			$('#fileList').html(" ");
			$("#fileList").css('display', 'none');
			
		});
		$(".conbg").click(function(event) {
			$(this).css('display', 'none');
			$(".bgs").css('display', 'none');
			$(".mycar-list,.mycar-list2").css('display', 'none');
			$('#fileList').html(" ");
			$("#fileList").css('display', 'none');
		});
		$(".cha").click(function(event) {
			$(".bgs").css('display', 'none');
			$(this).parent().parent().css('display', 'none');
		});

		$("table thead tr th").mouseover(function(){
			$(this).find('span').removeClass('none');
		}).mouseout(function(){
			$(this).find('span').addClass('none');
		})

		$("table thead tr th span").click(function(){
			var indexs = $(this).parent('th').index();
			$(this).parent('th').hide();
			var trs = $(this).parent().parent().parent().parent('table').find('tbody').find('tr');
			trs.each(function() {
				$(this).children('td:eq('+indexs+')').hide();
			});
		})

		$("#upload").change(function(){
            $("#ptext").text($(this).val());
        })

        $("#myForm").submit(function(){
        	if ($("#upload").val()=="") {
        		$("#xs").val("请点击上传文件");
        		return false;
        	}

        	if ($("#date").val()=="") {
        		$("#xs").val("请选择时间");
        		return false;
        	}
        })

        $(".phoneshow dl dt").toggle(function(){
        	$(this).siblings("dd").css("display","block");
        	$(this).find(".current").css("transform","rotate(180deg)");
        },function(){
        	$(this).siblings("dd").css("display","none");
            $(this).find(".current").css("transform","rotate(0deg)");
        })

	})
	}
}