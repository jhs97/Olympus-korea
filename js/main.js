/**$(function () {
  $("#h-container .h-col").onmouseover(function () {
    $("#h-container .h-title").addClass("on");
  });
});*/
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

  // footer
  $("#family-site-btn").click(function () {
    $(".family-site-nav > ul").toggleClass("on");
  });
});
