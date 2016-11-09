$(document).ready(function(){
	$('.nav_fenlei').hover(
		function(){
		var index=$(this).index()
			$('.xiala').css('display','none').eq(index).css('display','block')
			$('.nav_fenlei').css('background','#E4E4E4').eq(index).css('background','#F3F3F3')			
		},
		function(){
			$('.xiala').css('display','none')
			$('.nav_fenlei').css('background','#E4E4E4')
		})



		var now=0;
		var next=0;
		var img=$('.ban-picture .tu');
		var width=$('.ban-picture').width()
		var t=setInterval(move,2000)
		function move(){
		next=now+1;
		if(next>=img.length){
			next=0
		}
		$('.ban-picture .tu').eq(next).css('left',width).end().eq(now).animate({left:-width}).end().eq(next).animate({left:0})
		$('.lunbo .circle').eq(now).css('background','#D0CECB').end().eq(next).css('background','#E72487')
		now=next
		}
		$('.ban-picture').on({mouseover:function(){
			clearInterval(t)
		},mouseout:function(){
			t=setInterval(move,2000)
		}})
		$('.lunbo-left').click(function(){
			next=now-1;
			if(next<=0){
			next=img.length-1
		}
		$('.ban-picture .tu').eq(next).css('left',-width).end().eq(now).animate({left:width}).end().eq(next).animate({left:0})
		$('.lunbo .circle').eq(now).css('background','#D0CECB').end().eq(next).css('background','#E72487')
			now=next
		})
		$('.lunbo-right').click(function(){
				next=now+1;
		if(next>=img.length){
			next=0
		}
			$('.ban-picture .tu').eq(next).css('left',width).end().eq(now).animate({left:-width}).end().eq(next).animate({left:0})
			$('.lunbo .circle').eq(now).css('background','#D0CECB').end().eq(next).css('background','#E72487')
			now=next
		})
		$('.lunbo .circle').click(function(){
			var index=$(this).index()
			if(index>now){
			$('.ban-picture .tu').eq(index).css('left',width).end().eq(now).animate({left:-width}).end().eq(index).animate({left:0})
			$('.lunbo .circle').css('background','#D0CECB').eq(index).css('background','#E72487')
			now=index
			}
			if(index<now){
				$('.ban-picture .tu').eq(index).css('left',-width).end().eq(now).animate({left:width}).end().eq(index).animate({left:0})
				$('.lunbo .circle').css('background','#D0CECB').eq(index).css('background','#E72487')
			now=index
			}
		})


		$('.denglu').hover(function(){
			$('.denglu_yincang_top').css('display','block')
			$('.denglu_yincang_bottom').css('display','block')
		},function(){
			$('.denglu_yincang_top').css('display','none')
			$('.denglu_yincang_bottom').css('display','none')
		})

		$('.SJYYT').hover(function(){
			$('.SJYYT_yincang').css('display','block')
		},function(){
			$('.SJYYT_yincang').css('display','none')
		})


		
		$('.zaixianzixun').hover(function(){
			$('.zaixianzixun .kefu_hide').animate({left:-64},600)
		},function(){
			$('.zaixianzixun .kefu_hide').animate({left:0},600)
		})
		$('.changjianwenti').hover(function(){
			$('.changjianwenti .kefu_hide').animate({left:-64},600)
		},function(){
			$('.changjianwenti .kefu_hide').animate({left:0},600)
		})
		$('.tousuyijian').hover(function(){
			$('.tousuyijian .kefu_hide').animate({left:-64},600)
		},function(){
			$('.tousuyijian .kefu_hide').animate({left:0},600)
		})
})