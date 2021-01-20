$(function () {
  // 选项切换
  $('.ytype').delegate('li', 'click', function () {
    // $(this).children("span").css("color", "#00c1de");
    var index = $(this).index();
    $(this).children("span").addClass('touch').parent("li").siblings().children("span").removeClass('touch');
    $('.ytypecon').eq(index).removeClass('hide').siblings().addClass('hide');
  })

  // 轮播
  var timer = null;

  function play() {
    var i = 0;
    if (timer != null) clearInterval(timer);
    timer = setInterval(function () {
      i++;
      if (i == 4) {
        i = 1;
        $('.slide').css('left', `0rem`);
      }
      if (i == 3) {
        $('.points').children('li').eq(0).addClass('active').siblings().removeClass('active');
      }

      $('.points').children('li').eq(i).addClass('active').siblings().removeClass('active');
      // $('.slide').css('left', `-${20.7 * i}rem`);
      $('.slide').animate({
        left: "-" + 20.7 * i + "rem"
      }, 1000);
    }, 2000)
  }
  play();
})