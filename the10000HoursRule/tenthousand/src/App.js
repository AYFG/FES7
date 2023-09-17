import HeaderLogo from "./Components/HeaderLogo";
import Contents from "./Components/Contents";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import "./App.css";
function App() {
  return (
    <div>
      <HeaderLogo />
      <Contents />
      <Footer />
      <Form />
    </div>
  );
}
// Contents_input_pro에 텍스트를 입력하면 result_pro에 텍스트가 그대로 나온다
// Contents_input_time에 숫자를 입력하면 10000 / time을 나눈 값을 result_time에 출력 (time은 24이하의 숫자만 넣을 수 있도록
// Contents_Btn을 클릭하면 결과 출력

// Contents_GoGo를 누르면 Form_modal 출력 (스크롤이 가능하고 바깥이나 Form_btn_GoGo를 누르면 닫기)
export default App;
