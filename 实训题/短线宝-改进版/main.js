require.config({
	shim:{
		"jquery.tablescroll":{
			deps:["jquery"],
			exports: "jquery.fn.tablescroll"
		},
		"tab":{
			deps:["jquery"],
			exports: "jquery.fn.myTabs"
		},
		"collapse":{
			deps:["jquery"],
			exports: "jquery.fn.MyCollapse"
		}
	},
	paths:{
		jquery:"jquery.min",
		"tab":"tab",
		"collapse":"collapse",
		"jquery.tablescroll":"jquery.tablescroll"
	}
});
require(["jquery.min","collapse","jquery.tablescroll","tab"],function($){
	$('#tscroll').tableScroll({height:380});
	var tabs = new myTabs({wrapper:"#celve"});
	tabs.init();
	var collasps = new MyCollapse({wrapper:"#celve_collapse"});
	collasps.init();
	var tabsAttention = new myTabs({wrapper:"#attention"});
	tabsAttention.init();

	var width = $(window).width();		
	var widthnow = width - 680;
	$(".middle").css("width",widthnow);
	$(".middle_bottom_middle .attention_con").css("width",widthnow-114);
	$(".container").css("width",$(window).width());
	$(window).resize(function() {
		width = $(window).width();
		//alert(width);
		widthnow = width - 680;
		if(width > 1350){
			$(".middle").css("width",widthnow);
			$(".container").css("width",width);
		$(".middle_bottom_middle .attention_con").css("width",widthnow-114);
		}else{
			$(".middle").css("width",670);
			$(".container").css("width",1350);
			$(".middle_bottom_middle .attention_con").css("width",556);
		}			
	});
});