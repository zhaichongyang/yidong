// // banner轮播
$(function(){
	var box=$('.ban-picture')[0]
	var img=$('.lazy',box)
	var circle=$('.circle')
	var left=$('.lunbo-left')[0]
	var right=$('.lunbo-right')[0]
	var width=parseInt(getStyle(box,'width'));
	var n=0
	var next=0
	var flag=true
	var t=setInterval(move,2000)
	function move(type){
		var type=type||'l'
		if(!flag){
			return
		}
		flag=false
		if(type=='l'){
		 next=n+1
		if(next>=img.length){                
			next=0
		}
		img[next].style.left=width+'px';   
		animate(img[n],{left:-width},400)
		}else if(type=='r'){
		 next=n-1;
		if(next<0){
			next=img.length-1
		}
		img[next].style.left=-width+'px';
		animate(img[n],{left:width},400)
		}
		animate(img[next],{left:0},400,function(){
			flag=true
		})
		circle[n].style.background='#D0CECB'
		circle[next].style.background='#E72487'
		n=next	
	}
	box.onmouseover=function(){
		clearInterval(t);		
		}
	box.onmouseout=function(){			
		t=setInterval(move,2000); 		
		}
	right.onclick=function(){
			move('r')
	}
	left.onclick=function(){
		move('l')
	}
	for(var i=0;i<circle.length;i++){
		circle[i].index=i
		circle[i].onclick=function(){
			// console.log(this.index)
			if(this.index>n){
				img[this.index].style.left=width+'px';
				animate(img[n],{left:-width},400)
		}
		else if(this.index<n){
				img[this.index].style.left=-width+'px';
				animate(img[n],{left:width},400)
	
			}			
			animate(img[this.index],{left:0},400)
			circle[n].style.background='#D0CECB'
			circle[this.index].style.background='#E72487'
			n=this.index
		}
	}




	var lunbo1=$('#lunbo')
	var left1=$('#lunbo-left')
	var right1=$('#lunbo-right')
	var box1=$('.rotate')[0]
	var img1=$('.content')[3]
	var flag=true;
	var width1=parseInt(getStyle(img1,'width'))
	
	var t1=setInterval(move1,1500)
	function move1(){
		if(!flag){
			return
		}
		flag=false;
		animate(box1,{left:-width1},400,function(){
			var box1First=getFirst(box1)
			box1.appendChild(box1First)
			box1.style.left='0px'
			flag=true
		})
	}
	lunbo1.onmouseover=function(){
		clearInterval(t1)
	}
	lunbo1.onmouseout=function(){
		t1=setInterval(move1,1500)
	}
	left1.onclick=function(){
		if(!flag){
			return
		}
		flag=false;
		var last=getLast(box1)
		var first=getFirst(box1)
		insertBefore(last,first)
		box1.style.left=-width1+'px'
		animate(box1,{left:0},400,function(){
			flag=true
		})
	}
	right1.onclick=function(){
		move1()
	}




var nav_fl=$(".nav_fenlei");
	for(var i=0;i<nav_fl.length;i++){
		if(i==0){
			continue;
		}
		hover(nav_fl[i],function(){
			var ul=$(".xiala",this);
			for(var i=0;i<ul.length;i++){
				ul[i].style.display="block";
			}
		},function(){
			var ul=$(".xiala",this);
			for(var i=0;i<ul.length;i++){
				ul[i].style.display="none";
			}
		})
	}




//head
	var denglu=$('.denglu')[0]
	var denglu_yincang_bottom=$('.denglu_yincang_bottom')[0]
	var denglu_yincang_top=$('.denglu_yincang_top')[0]
	denglu.onmouseover=function(){
		denglu_yincang_bottom.style.display='block'
		denglu_yincang_top.style.display='block'
	}
	denglu.onmouseout=function(){
		denglu_yincang_bottom.style.display='none'
		denglu_yincang_top.style.display='none'
	}



	var SJYYT=$('.SJYYT')[0]
	var SJYYT_yincang=$('.SJYYT_yincang')[0]
	SJYYT.onmouseover=function(){
		SJYYT_yincang.style.display='block'
	}
	SJYYT.onmouseout=function(){
		SJYYT_yincang.style.display='none'
	}

var kefufuwu=$('.kefufuwu')
var kefu_hide=$('.kefu_hide')
for(var i=0;i<kefufuwu.length;i++){
	kefufuwu[i].index=i
	hover(kefufuwu[i],function(){
		for(var j=0;j<kefu_hide.length;j++){
			animate(kefu_hide[this.index],{left:-64},300)
		}

	},function(){
		animate(kefu_hide[this.index],{left:0},300)
	})
}
})  
var l=jQuery.noConflict();
	 l(document).ready(function(){
	 	l("img").lazyload({
	 		threshold:200
	 	})
})
