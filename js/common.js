$(document).ready(function(){

  /* pc */
  var _menuBtn = $('#wrap #pcheader #gnb');
  var _navBg = $('#wrap #pcnav');
  var _navPch = $('#wrap #pcheader');
  var _navTxts = $('#wrap #pcheader #pcnav ul li a')

  _navPch.on({
    mouseenter: function () {
      if(_navBg.width() === 0){
        _navBg.stop().animate({width: 120}, 500,function () {
          _menuBtn.stop().animate({ left: 70 }, 500).find('.line').addClass('bgColorB'),
          _navTxts.addClass('fadeIn');
        })
    }},

    mouseleave: function () {
      if(_navBg.width() > 110 && _navBg.width() < 130 ){
        _navBg.stop().animate({width: 0}, 500, function () {
          _menuBtn.stop().animate({ left: 50 }, 500).find('.line').removeClass('bgColorB'),
          _navTxts.removeClass('fadeIn');
        })
      }
    }
  })

  _menuBtn.on({
    click: function () { // 클릭 이벤트
        _navBg.stop().animate({ width: 270 }, 500),
        _menuBtn.stop().animate({ left: 220 }, 500).addClass('Cross'),
        _navTxts.removeClass('fadeIn').addClass('allIn');

      if(_navBg.width() > 120){
        _navBg.stop().animate({ width: 0 }, 500),
        _menuBtn.stop().animate({ left: 50 }, 500).removeClass('Cross').find('.line').removeClass('bgColorB'),
        _navTxts.removeClass('allIn');
      }

    },
  })










  // _navBg.on({
  //   mouseenter: function() { // 마우스 엔터
  //     $(this).stop().animate({ left: -180 }, 500).find('#gnb').animate({ right: 70 }, 500).find('.line').addClass('bgColorB');
  //   },

  //   mouseleave: function() { // 마우스 리브
  //     $(this).stop().animate({ left: -260 }, 500).find('#gnb').animate({ right: 0 }, 500);
  //     _menuBtn.removeClass('Cross').find('.line').removeClass('bgColorB');
  //   }
  // });



  // _menuBtn.on({
  //   click: function () { // 클릭 이벤트
  //     if($(this).hasClass('Cross')){
  //       _navBg.stop().animate({left: -260},500);
  //       _menuBtn.removeClass('Cross').find('.line').removeClass('bgColorB');
  //     }
  //     return false;
  //   }
  // })



  });
