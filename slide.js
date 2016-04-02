window.onload=function(){
	var container1=document.getElementById("container-1");
	var lunbo=document.getElementById("lunbo");
	var buttons1=document.getElementById("buttons-1").getElementsByTagName("span");
	var prev1=document.getElementById("prev-1");
	var next1=document.getElementById("next-1");
	var newLeft;
	var index=1;
	var timer1;
	var flag=true;

	function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,attr,target){
	flag=false;
	var timer=null;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var icur=0;
		icur=parseInt(getStyle(obj,attr));
		var speed=(target-icur)/10;
		speed = speed > 0?Math.ceil(speed):Math.floor(speed);
		if(icur==target){
			clearInterval(obj.timer);
		}
		else{
			obj.style[attr]=icur+speed+'px';
		}
	},10);
}
	function animated(offset){
		newLeft = parseInt(lunbo.style.left) + offset;
		if(newLeft < -3120){
				lunbo.style.left="-520px";
				newLeft= parseInt(lunbo.style.left) + offset;
			}
			if(newLeft > 0){
				lunbo.style.left="-2600px";
				newLeft= parseInt(lunbo.style.left) + offset;
			}
		startMove(lunbo,"left",newLeft);
		flag=true;
	}

	function showButton(){
		for(var i=0;i<buttons1.length;i++){
			if(buttons1[i].className == 'on'){
				buttons1[i].className ="";
				break;
			}
		}
		buttons1[index-1].className ="on";
	}

	prev1.onclick = function(){
		if(index == 1){
			index =5;
		}
		else{
			index--;
		}
		showButton();
		if(flag){
		animated(520);
	}
	}

	next1.onclick = function(){
		if(index == 5){
			index =1;
		}
		else{
			index++;
		}
		showButton();
		if(flag){
		animated(-520);
	}
	}

	for(var i=0;i<buttons1.length;i++){
		buttons1[i].onclick=function(){
			var myIndex = this.getAttribute("index");
			var offset1 = -520*(myIndex - index);
			index = myIndex;
			showButton();
			animated(offset1);
		}
	}

	function play(){
		timer1=setInterval(function(){
			next1.onclick();
			},3000);
	}

	play();


	function stop(){
		clearInterval(timer1);
	}

	container1.onmouseover=stop;
	container1.onmouseout=play;
}