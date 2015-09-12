window.onload=function(){
	var titles=document.getElementById("notice-tit").getElementsByTagName("li");
	var divs=document.getElementById("notice-con").getElementsByTagName("div");
	for(var i=0;i<titles.length;i++){
		titles[i].id=i;
		titles[i].onmouseover=function(){
			for(var j=0;j<titles.length;j++){
				titles[j].className="";
				divs[j].style.display="none";
			}
			this.className = "select";
			divs[this.id].style.display="block";
		}
}
}