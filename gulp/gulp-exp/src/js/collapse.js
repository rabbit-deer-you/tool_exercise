(function($){

	var opt = {
		wrapper:""
	};

	$.fn.extend({
		"MyCollapse":function(option){
			if(typeof option == "object"){
				this._setting = $.extend(true,{},opt,option);
			}else{
				this._setting = $.extend(true,{},opt);
			}
		}
	});

	$.fn.MyCollapse.prototype.init = function(){
		var self = this;
		self.nav = $(this._setting.wrapper + " li").find(".title");

		$.each(self.nav,function(){
				$($(this)).on("click",function(){
			//$(this).parent.
				$($(this).next()).slideToggle(400);
				$(".collapse_con").not($(this).next()).slideUp();
			});
		});
	}; 

})(jQuery);

var flag = 0;
sadfkjasd fsajk 