$(function () {
  $(function () {
    /** 2가지 유형
     * 1. 현재 하위 뎁스만 보임
     * 2. 전체 하위뎁스 표시
     */
    $("#gnb .depth1 > li").hover(
      // mouseover
      function () {
        $(".depth2") // 여기만 수정하면 됨 this or 선택자
          .addClass("on");
      },
      // mouseout
      function () {
        $(".depth2").removeClass("on");
      }
    );
  });

  $("#family-site-btn").click(function () {
    $(".family-site-nav > ul").toggleClass("on");
  });

  $("#toggle-btn").click(function () {
    $("#gnb").addClass("on");
  });

  $("#close-btn").click(function () {
    $("#gnb").removeClass("on");
  });
}); // $headerfooter

$(function () {
  const breakPoint = 768;
  $(window).on("resize", function () {
    let w = window.innerWidth;
    console.log(w);

    if (w >= breakPoint) {
      console.log("min-width: 768px");
    } else {
      console.log("max-width: 767px");
      $("#gnb .depth1 > li").click(function () {
        $(this).children(".depth2").toggleClass("on");
        console.log("toggle");
      });
    }
  });
}); // $

/*
$("nav .depth1 > li").click(function () {
  $(this).next(".depth2 > li").stop().slideToggle(300);
  $(this).toggleClass("on").siblings().removeClass("on");
  $(this).next(".depth2 > li").siblings(".depth2 > li").slideUp(300);
  // 1개씩 펼치기
}); 아코디언메뉴*/
