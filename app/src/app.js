var amapObj;
$(document).ready(function(){
	var position=new AMap.LngLat(116.397428,39.90923);
		  mapObj=new AMap.Map("container",{
		  view: new AMap.View2D({//创建地图二维视口
		  center:position,//创建中心点坐标
		  zoom:14, //设置地图缩放级别
		  rotation:0 //设置地图旋转角度
		 })
		});//创建地图实例

		  $(".menubar").menubar();

})