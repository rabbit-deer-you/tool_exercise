define(function(require,exports,module){
	var $ = require('jquery');
	var opt = {
		wrapper:""
	};

	function myTabs(option){
		if(typeof option == "object"){
			this._setting = $.extend(true,{},opt,option);
		}else{
			this._setting = $.extend(true,{},opt);
		}
	}

	module.exports = myTabs;
	
	myTabs.prototype.init = function(){
		var self = this;
		self.nav = $(this._setting.wrapper+ " .mytabs li");
		$.each(self.nav,function(){
			$(this).on("click",function(){
				self.hideCon();
				$(this).addClass("tab_show");
				$("#"+$(this).attr("toggle-data")).show();
			});
		});
		self.hideCon();
		$("#"+$(self.nav[0]).attr("toggle-data")).show();
		$(self.nav[0]).addClass("tab_show");
	};
	myTabs.prototype.hideCon = function(){
		var self = this;
		$.each(self.nav,function(){
			$(this).removeClass("tab_show");
			$("#"+$(this).attr("toggle-data")).hide();
		});
	};
});