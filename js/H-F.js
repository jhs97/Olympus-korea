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
  

  $('#family-site-btn').click(
    function () {
      $('.family-site-nav > ul')
        .toggleClass('on')
    }
  );

  $("#toggle-btn").click(function(){
		$("#gnb").addClass("on");
	});

  $("#close-btn").click(function(){
		$("#gnb").removeClass("on");
	});

  // $('#gnb .depth1 > li:nth-child(3)').click(
  //   function () {
  //     $('#gnb .depth1 li:nth-child(3) .depth2')
  //       .toggleClass('on')
  //   }
  // );

  // $('#gnb .depth1 > li:nth-child(4)').click(
  //   function () {
  //     $('#gnb .depth1 li:nth-child(4) .depth2')
  //       .toggleClass('on')
  //   }
  // );

  // $('#gnb .depth1 > li:nth-child(5)').click(
  //   function () {
  //     $('#gnb .depth1 li:nth-child(5) .depth2')
  //       .toggleClass('on')
  //   }
  // );

  // $('#gnb .depth1 > li:nth-child(6)').click(
  //   function () {
  //     $('#gnb .depth1 li:nth-child(6) .depth2')
  //       .toggleClass('on')
  //   }
  // );

  // $('#gnb .depth1 > li:nth-child(7)').click(
  //   function () {
  //     $('#gnb .depth1 li:nth-child(7) .depth2')
  //       .toggleClass('on')
  //   }
  // );




}); // $