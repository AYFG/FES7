import { BrowserRouter, Routes, Route } from "react-router-dom";
// BrowserRouter UI와 URL을 연결함 마치 MPA와 같이 URL을 사용할 수 있게
//Routes URL이 변경되면 <Routes>는 모든 자식 <Route>를 살펴보고 가장 알맞는 것을 매칭한다
//Routes 현재 URL과 매칭된 UI를 렌더링 하는 역할을 한다

//URL 자원의 참조 , 자원에 접근하는 방법

// <BrowserRouter vs HashRouter>
// BrowserRouter : 한 집에 문이 두 개 다른 집처럼 보임
// HashRouter : URL주소에 #(해쉬)가 들어감 이는 서버의 폴더구조를 이동하는것 과는 전혀 다른 모습이기 때문에 로봇을 통한 크롤링이 불가능해지고 결국 SEO에 악영향

function Index() {
  return <h1>hello world0</h1>;
}

function One() {
  return <h1>hello world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
