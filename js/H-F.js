// 시작시 윈도우 크기 판단 후 스크립트 실행
function checkDevice() {
  const breakPoint = 768;
  let w = window.innerWidth;
  console.log(w);

  if (w >= breakPoint) {
    console.log("큰화면 코드");
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
  } else {
    console.log("작은화면 코드");
    $("nav .depth1 > li").click(function () {
      $(this).children(".depth2").toggleClass("on");
    });
  }
}

$(function () {
  checkDevice();
  // const breakPoint = 768;

  $(window).on("resize", function () {
    checkDevice();
  });
}); // $

$(function () {
  $("#family-site-btn").click(function () {
    $(".family-site-nav > ul").toggleClass("on");
  });

  $("#toggle-btn").click(function () {
    $("#gnb").addClass("on");
  });

  $("#close-btn").click(function () {
    $("#gnb").removeClass("on");
  });
}); // $
