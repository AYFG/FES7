import React, { createContext, useState } from "react";
import ThemeComponent from "./components/ThemeComponent";
import ThemeSwitch from "./components/ThemeSwitch";

const ThemeContext = createContext();

// setTheme 함수를 호출해서 theme의 상태를 변경합니다.
function DarkMode() {
  const [theme, setTheme] = useState("light");

  //   이전 context 값 사용 함수형 업데이트
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeComponent />
        <ThemeSwitch />
      </ThemeContext.Provider>
    </div>
  );
}

export { DarkMode, ThemeContext };
