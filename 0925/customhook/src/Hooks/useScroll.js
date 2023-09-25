import { useEffect, useState } from "react";

export default function useScroll() {
  const [isBottom, setIsBottom] = useState(false);

  //   console.log("뷰포트의 높이: ", window.innerHeight);
  //   console.log("총높이:", document.documentElement.offsetHeight);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      //   console.log("스크롤된 값", document.documentElement.scrollTop);
      // innerHeight : 뷰포트의 높이
      // scrollTop: target 요소가 화면 상단으로부터 스크롤된 길이를 반환
      // offsetHeight : 페이지의 전체 높이를 의미
      //   뷰포트의 높이 + 스크롤의 값이 화면 전체의 높이보다 크거나 같다면

      setIsBottom(
        window.innerHeight + document.documentElement.scrollTop + 5 >=
          document.documentElement.offsetHeight
      );
    });
  }, []);
  return isBottom;
}
