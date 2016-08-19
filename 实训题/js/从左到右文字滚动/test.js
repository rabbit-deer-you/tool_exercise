(function($){
	var defalut = {
		wrapper: "",
		speed:100
	};

	$.fn.extend({
		"scrollText":function(options){
			if(typeof options == "object"){
                this._setting = $.extend(true,{},defalut,options);
            }else{
                this._setting = $.extend(true,{},defalut);
            }
		}
	});

	$.fn.scrollText.prototype.init = function(){
		var self = this;
		self.wrapper = $(self._setting.wrapper)[0];
		self.container = $("#container")[0];
		self.con_1 = $("#con_1")[0];
		self.con_2 = $("#con_2")[0];
		self.speed = self._setting.speed;
		self.con_2.innerHTML = self.con_1.innerHTML;
		self.addEvent();
		self.scroll = function (){
			if(self.con_2.offsetLeft <= self.container.scrollLeft){
				self.container.scrollLeft -= self.con_1.offsetWidth;
			}else{
				self.container.scrollLeft++;
			}
		};
		
		self.slide = setInterval(self.scroll,self.speed);
	};

	$.fn.scrollText.prototype.addEvent = function(){
		var self = this;
		$(self.wrapper).on("mouseover",function(){
			clearInterval(self.slide);
		});
		$(self.wrapper).on("mouseout",function(){
			self.slide = setInterval(self.scroll,self.speed);
		});
	};
})(window.jQuery);