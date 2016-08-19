(function($){
	var defalut = {
        wrapper: "",
        slideTime: 3000
    };
                
    $.fn.extend({
        "PicSlide": function(options){
            if(typeof options == "object"){
                this._setting = $.extend(true,{},defalut,options);
            }else{
                this._setting = $.extend(true,{},defalut);
            }
        }
    });

    $.fn.PicSlide.prototype.init = function(){
    	var self = this;
    	self.numNow = 0;
    	self.numBack = 0;
    	self.animate = null;
    	self.wrapper = $(self._setting.wrapper);
    	self.next = $(".next")[0];
    	self.back = $(".back")[0];
    	self.li = $(self._setting.wrapper).find("li");
    	self.addEvent();
    	self.scroll();
    };

    $.fn.PicSlide.prototype.scroll = function(){
    	var self = this;
    	self.display();
    	self.runnext = function(){
	    	self.numBack = self.numNow;
	    	if(self.numNow === self.li.length - 1){  		
	    		self.numNow = 0;
	    	}else{
	    		self.numNow++;
	    	}
	    	self.display();
    	};
    	self.runback = function(){
	    	self.numBack = self.numNow;
	    	if(self.numNow === 0){  		
	    		self.numNow = self.li.length - 1;
	    	}else{
	    		self.numNow--;
	    	}
	    	self.display();
    	};
    	self.animate = setInterval(self.runnext,self._setting.slideTime);
    };

    $.fn.PicSlide.prototype.addEvent = function(){
    	var self = this;
    	self.wrapper.on("mouseover",function(){
    		clearInterval(self.animate); 
    		$(self.next).show();
    		$(self.back).show();
    	});
    	self.wrapper.on("mouseout",function(){
    		self.animate = setInterval(self.runnext,self._setting.slideTime);
    		$(self.next).hide();
    		$(self.back).hide();
    	});
    	$(self.next).on("click",function(){
    		self.runnext();
    	});
    	$(self.back).on("click",function(){
    		self.runback();
    	});
    };

 	$.fn.PicSlide.prototype.display = function(){
 		var self = this;		
 		$(self.li[self.numBack]).hide();
 		$(self.li[self.numNow]).show();
 	};

})(window.jQuery);