import axios from "axios"
import { useState,useEffect } from "react";

function App() {
  const [users,setUsers] = useState(null);
  const [loading,setLoading] = useState(null);
  const [error , setError] = useState(null);

  const fetchUsers = async () => {
    try{
      // 요청 시작시 error,users 초기화
      setError(null);
      setUsers(null);
      // loading 상태를 true
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data) // 데이터는 response.data 안에 들어있습니다.

    }catch(e){
      setError(e);
    }
    setLoading(false);
  };
  useEffect(()=>{
    fetchUsers()
  },[]);
  if (loading) return <div>로딩</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map(user=>(
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
    
  );
}
export default App;
