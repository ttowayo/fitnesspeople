jQuery1_11_2(function () {
  /*이곳은 건들지 마세요 Start*/
  const locations = location.href;
  const locationSplit = locations.split("?");
  const encodedString_benefit = locationSplit[1];
  const decodedString_benefit = decodeURIComponent(encodedString_benefit);
  //alert(decodedString)
  /*메뉴 컬러 분기*/

  const elementsWithDataName = document.querySelectorAll(
    ".board-list[data-cate]"
  );
  $(".board-list[data-cate]").each(function () {
    if ($(this).data("cate") === decodedString_benefit) {
      // CSS를 변경하고 싶은 경우 여기에서 요소에 스타일을 추가하거나 클래스를 변경할 수 있습니다.
      $(this).find("a").css("color", "#f0468c"); // 예시로 글자색을 빨간색으로 변경합니다.
    }
  });
  /*board 타이틀은 이름이 달라 연동이 안되는 관계로 강제로 적용시킵니다*/
  if (decodedString_benefit === "partnership") {
    $(".pageTitle").find(">h2").text("partnership").css("color", "#f0468c");
  }
  if (decodedString_benefit === "thebodyfit") {
    $(".pageTitle").find(">h2").text("thebodyfit").css("color", "#f0468c");
  }
});
