(function($) {

	function menubar(el) {
		this.el = el;
		this.$el = $(el);

	}
	menubar.prototype.init = function(options) {
		console.log("init");
		var self = this;
		var defaults={
			position:'left',
			panelWidth:'350px',
			panelHight:'200px',
			selectedClass:'current'

		};
		self.settings=$.extend({},defaults,options);

        var $expandPanel=self.$el.find(".expandPanel");
        $expandPanel.hide();
		//注册事件
		self.$el.find("ul li a").each(function(){
			$(this).on('click',function(){
				self.$el.find("ul li a").removeClass(self.settings.selectedClass);
				$(this).addClass(self.settings.selectedClass);
				self.show();
			});
		});
		self.$el.find(".expandPanel .panel-close").each(function(){
			$(this).on('click',function(){
				self.hide();
			});
		});
	}
	menubar.prototype.show = function(){
		
		var self=this;
		var settings=self.settings;
		var $expandPanel=self.$el.find(".expandPanel");
		$expandPanel.show();
		if(settings.position && settings.position=="left")
		{
			$(self).show();
			$expandPanel.animate({width:settings.panelWidth},'slow','swing',function(){
				self.isshow=true;
			});
		}
	},
	menubar.prototype.hide=function()
	{
		
		var self=this;
		var settings=self.settings;
		var $expandPanel=self.$el.find(".expandPanel");
		if(settings.position && settings.position=="left")
		{
			$expandPanel.animate({width:'0px'},'slow','swing',function(){
				self.isshow=false;
				$expandPanel.hide();
			});
		}
	}
	$.fn.menubar = function(method) {
		var method = arguments[0];
		var args = arguments;
		var result;
		this.each(function() {
			var self = this;
			var obj = self.menubar;
			if (!obj) {
				obj = new menubar(self);
				self.menubar = obj;
			}
			if (obj[method]) {
				method = obj[method];
				args = Array.prototype.slice.call(args, 1);
			} else if (typeof(method) == 'object' || !method) {
				method = obj.init;

			} else {
				$.error('Method ' + method + ' does not exist on jQuery.pluginName');
				result = this;
			}
			result = method.call(obj, args);

		});
		return result;

	};

})(jQuery);