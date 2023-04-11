// 모든 대상 dom 객체 가져오기
const pickButton = document.querySelectorAll("#dibs");

// 로컬스토리지에 찜할 수 있는 목록 수 저장
localStorage.setItem("sum", `${pickButton.length}`);

for (let i = 0; i < pickButton.length; i++) {
  pickButton[i].addEventListener("click", function (event) {
    // 찜하기 1, 찜 취소하기 2
    if (localStorage.getItem(`pick${i}`) == "1") {
      console.log();
      localStorage.setItem(`pick${i}`, "2");
    } else {
      localStorage.setItem(`pick${i}`, "1");
    }
  });
}

// 시간 있으면 배열로...

// let pickCart = [];
// pickCart.push(`"num:${i}, result:1"`);
//       localStorage.setItem(``)
