window.onload = function () {
  // 获取元素
  var C_mobile_banner = document.querySelector(".C_mobile_banner");
  var C_mobile_wrap = document.querySelector(".C_mobile_wrap");
  //  获取轮播图父盒子的宽度
  var w = C_mobile_banner.offsetWidth;
  // console.log(w);
  var C_num_wrap = document.querySelector(".C_num_wrap");

  // 计数器
  var index = 0;
  //  定时器
  var timer = setInterval(function () {
    index++;
    var translatex = -index * w;
    // 过渡动画效果
    C_mobile_wrap.style.transition = "all .3s";
    //  移动ul
    C_mobile_wrap.style.transform = "translatex(" + translatex + "px)";
  }, 2000);
  C_mobile_wrap.addEventListener("transitionend", function () {
    //  无缝滚动
    //  判断边界值
    if (index >= 3) {
      index = 0;
      // 去掉过渡效果，这样让我们的ul快速的跳转到目标位置
      C_mobile_wrap.style.transition = "none";
      // 利用最新的索引号乘以宽度再去滚动图片
      var translatex = -index * w;
      C_mobile_wrap.style.transform = "translateX(" + translatex + "px)";
    } else if (index < 0) {
      index = 2;
      C_mobile_wrap.style.transition = "none";
      // 利用最新的索引号乘以宽度再去滚动图片
      var translatex = -index * w;
      C_mobile_wrap.style.transform = "translateX(" + translatex + "px)";
    }

    // 小列表跟随变化
    C_num_wrap.querySelector("li.active").classList.remove("active");
    // 让当前的索引值添加类名
    C_num_wrap.children[index].classList.add("active");
  });

  // 手指触摸滑动轮播图
  var startX = 0;
  var moveX = 0;
  var flag = false;
  //   触摸事件
  C_mobile_wrap.addEventListener("touchstart", function (e) {
    // 手指在ul上触摸的起始坐标
    startX = e.targetTouches[0].pageX;
    // console.log(e.targetTouches);
    // 手指触摸停止轮播图定时器
    clearInterval(timer);
  });
  // 手指滑动事件
  C_mobile_wrap.addEventListener("touchmove", function (e) {
    // 手指在页面的滑动距离
    moveX = e.targetTouches[0].pageX - startX;
    var translatex = -index * w + moveX;
    // 手指拖动轮播图时,取消动画
    C_mobile_wrap.style.transition = "none";
    C_mobile_wrap.style.transform = "translateX(" + translatex + "px)";
    flag = true;
    //  阻止默认屏幕滚动事件
    e.preventDefault();
  });

  // 手指离开事件
  C_mobile_wrap.addEventListener("touchend", function (e) {
    //  判断节流阀
    if (flag) {
      // 判断手指移动距离,大于35像素就播放上/下一张图片
      if (Math.abs(moveX) > 35) {
        //  判断正值,右滑上一张,否则左滑下一张
        if (moveX > 0) {
          index--;
        } else {
          index++;
        }
        //  移动的距离
        var translatex = -index * w;
        C_mobile_wrap.style.transition = "all .3s";
        //  轮播图移动
        C_mobile_wrap.style.transform = "translateX(" + translatex + "px)";
      } else {
        //  移动距离小于35像素,就回弹
        var translatex = -index * w;
        C_mobile_wrap.style.transition = "all .3s";
        //  轮播图移动
        C_mobile_wrap.style.transform = "translateX(" + translatex + "px)";
      }
    }
    clearInterval(timer);
    //   手指离开重新开启定时器
    timer = setInterval(function () {
      index++;
      var translatex = -index * w;
      C_mobile_wrap.style.transition = "all .3s";
      C_mobile_wrap.style.transform = "translatex(" + translatex + "px)";
    }, 2000);
  });
};
