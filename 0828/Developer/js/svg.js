// dom에서 path 찾기
const path = document.querySelector("#path");
const openBtn = document.querySelector(".btn-open");
// path의 전체 길이 구하기
const pathLength = path.getTotalLength();
// console.log(pathLength);
// dash의 길이와 공백
// path.style.strokeDasharray = 1000 + " " + 1000;
// path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDasharray = `${pathLength} ${pathLength}`;
// dash를 어디서 부터 그릴지
path.style.strokeDashoffset = pathLength;
// console.log(
//   document.documentElement.clientHeight,
//   document.documentElement.scrollHeight
// );
function scrollHandler() {
  // 현재 스크롤 위치
  const scrollTop = document.documentElement.scrollTop;
  //   console.log(scrollTop);
  // 전체 스크롤의 길이
  const scrollHeight = document.documentElement.scrollHeight;
  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight;
  // 스크롤의 위치 => %  0 - 1의 값을 가짐
  //   전체 스크롤 영역에서
  const scrollpercentage = scrollTop / (scrollHeight - clientHeight);
  //   console.log(scrollpercentage);
  const drawLength = pathLength * scrollpercentage;
  //   console.log(drawLength);
  //pathLength -> 0
  path.style.strokeDashoffset = pathLength - drawLength;

  //   button opacity 조절
  openBtn.style.opacity = scrollpercentage;
  if (scrollpercentage >= 0.8) {
    openBtn.disabled = false;
  } else {
    openBtn.disabled = true;
  }
}

window.addEventListener("scroll", scrollHandler);
