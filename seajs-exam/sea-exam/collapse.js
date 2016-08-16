define(function(require,exports,module){
	var $ = require('jquery');
	var opt = {
		wrapper:""
	};
	function MyCollapse(option){
		if(typeof option == "object"){
			this._setting = $.extend(true,{},opt,option);
		}else{
			this._setting = $.extend(true,{},opt);
		}
	}
	module.exports = MyCollapse;
	MyCollapse.prototype.init = function(){
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
});
