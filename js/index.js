var mySwiper = new Swiper('.swiper-container', {
			//添加小圆点
			pagination: '.swiper-pagination',
			//点击小圆点切换
			paginationClickable: true,
			//循环
			loop: true,
			//自动轮播
			autoplay: 2000,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev'
				//          autoplayDisableOnInteraction: false,
				//          slidesPerView:3
		})
		$(function () {
       $(".banner>div>ul>li") .hover(function () {
           var index=$(this).index()
           $(".po").eq(index).show().siblings(".po").hide()
       },function () {
           $(".po").hide();
       })
    })
		$('.lov li').hover(function(){
			$(this).addClass('acti').siblings().removeClass('acti');
		})
		$('.ul1 li').hover(function(){
			$(this).parent().next().show();
		})
		$('.lee').click(function(){
			$('.mx1').show();
			$('.mx2').hide();
		})
		$('.rigg').click(function(){
			$('.mx2').show();
			$('.mx1').hide();
		})
		$('.l').click(function(){
			$('.ull').show();
			$('.ull2').hide();
		})
		$('.r').click(function(){
			$('.ull2').show();
			$('.ull').hide();
		})