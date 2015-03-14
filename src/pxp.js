var unactive = [];
var pxp = [
    //P
    [0,-7],[1,-7],[2,-7],[3,-7],[4,-7],[0,-6],[0,-5],[0,-4],[1,-4],[2,-4],[2,-5],[2,-6],
	//X
    [2,0],[1,-1],[0,-2],[3,1],[4,2], [4,-2],[3,-1],[1,1],[0,2],
    //P
    [0,7],[1,7],[2,7],[3,4],[4,4],[0,6],[0,5],[0,4],[1,4],[2,4],[2,5],[2,6],
];
var setpxs = function(){
	var h = 5;
	var target = $("#pxp-overHeader");
	var widthGes = $(window).width();
	var max = Math.ceil(widthGes/30);
	
	var xOffset = ( widthGes-(max+1)*30 )/2;
	target.css('width', (max+1)*30 + 'px').css('height', h*30-1).css('left', xOffset + 'px');
	var xMiddle = Math.floor((max+1)/2);
	
	for(var j=0;j<h;j++){
		for(var i=0;i<max+1;i++){
			var square = $('<div>').addClass('sq');
			for(var k=0;k<pxp.length;k++){
				
				if(pxp[k][0]==j && (pxp[k][1]+xMiddle)==i){
					square.addClass('pxp');
				}
			}
			unactive.push(square);
			target.append(square);
		}
	}
}
var showTimeout = function(){
	var key = Math.floor(Math.random()*unactive.length);
	unactive[key].addClass('visible');
	unactive.splice(key, 1);
	
	if(unactive.length)
		setTimeout(showTimeout, 10);
}


$(document).ready(function () {
	setpxs();
	showTimeout();
	
	$('article').on('mouseover', function(e){
		console.log(e.currentTarget);
		$(e.currentTarget).addClass('over');
	})
});