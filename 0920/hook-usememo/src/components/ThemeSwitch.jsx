import React, { useContext } from "react";
import { ThemeContext } from "../DarkMode";

export default function ThemeSwitch() {
  // 클릭이벤트가 발생하면 상태 끌어올리기를 통해서 setTheme 함수를 호출해서 theme를 업데이트 한다.
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>테마 전환</button>
    </div>
  );
}
