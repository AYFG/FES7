import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";

function Quiz1() {
  return (
    <BrowserRouter>
      {/* a 태그는 새로고침이 된다 a태그는 완전 다른 페이지로 전환할 때 사용하고 link는 바뀌는 것처럼 보이게 할 때 사용한다.*/}
      <a href="/">★aTagHome★</a>
      <br />
      <Link to="/">home</Link>
      <Link to="/cart"> Cart </Link>
      <Link to="/users"> Users </Link>
      <Link to="/users/coupon"> Coupon </Link>
      <Link to="/users/question"> Question </Link>
      <Link to="/users/notice"> Notice </Link>
      <Link to="/products/1"> Products </Link>
      <Link to="/products/1/notice"> Notice </Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />

        {/* Users Outlet */}
        {/* 아웃렛은 감싸진 라우트 안의 자식 컴포넌트를 꺼내 보여주는 컴포넌트 */}
        {/* <Route path="/users/*" element={<Outlet />} /> */}
        <Route path="/users/*" element={<Users />}>
          {/* 여기 주소는 /users */}
          <Route path="" element={<Users />} />
          {/* users/쿠폰,퀘스쳔,노티스 */}
          <Route path="coupon" element={<Coupon />} />
          <Route path="question" element={<Question />} />
          <Route path="notice" element={<Notice />} />
        </Route>

        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route
          path="/products/:id/notice"
          element={<ProductDetailNoticePage />}
        />
      </Routes>
      {/* /users로 이동하는 버튼 useNavigate 이용하기. */}
      <Button />
    </BrowserRouter>
  );
}
function Button() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/users")}>유저보기</button>;
}

function HomePage() {
  return <h1>Welcome to HomePage</h1>;
}
function Cart() {
  return <h1>카트</h1>;
}
function Users() {
  return (
    <div>
      <h1>유저들</h1>
      {/* Outlet은 여기서도 사용 가능 */}
      <Outlet />
    </div>
  );
}
// function Users() {
//   return <h1>유저들</h1>;
// }
function Coupon() {
  return <h1>유저 Coupon</h1>;
}
function Question() {
  return <h1>유저 Question</h1>;
}
function Notice() {
  return <h1>유저 Notice</h1>;
}
function ProductDetailPage() {
  const { id } = useParams();
  return <h1>{id}번 상품입니다</h1>;
}
function ProductDetailNoticePage() {
  const { id } = useParams();
  return <h1>{id}번 상세 알림 페이지</h1>;
}

export default Quiz1;
