import InputComponent from "./components/InputComponent";
import SomethingComponent from "./components/SomethingComponent";
import useMouseLocation from "./Hooks/useMouseLocation";
import useScroll from "./Hooks/useScroll";
function App() {
  // Custom Hook?
  // 사용자들이 마음대로 편리하게 커스텀한 훅
  // console.log(useMouseLocation());
  const mouseLocation = useMouseLocation();
  const isBottom = useScroll();
  console.log(isBottom);
  return (
    <div style={{ height: 1000 }}>
      {/* <div
      style={{
        height: 1000,
        width: 100,
        backgroundColor: mouseLocation.x > 400 ? "royalblue" : "hotpink",
      }}
      ></div> */}
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}
export default App;
