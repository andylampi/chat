import { useEffect, useState } from "react";
import Main from "./main.js"
import { post } from "./API/request.js";
import User from "./Components/User.js";
function App() {
  const [users, setUser] = useState({})
  const [users_srch, setUserSrch] = useState([])
  const [user_typed, setUserTyped] = useState("")

  useEffect(()=>{
    if(user_typed !== ""){
      post("http://127.0.0.1:5000/get_users", {user:user_typed}).then(el => {
        if(el.users.length > 0){
          setUserSrch([...users_srch, el.users])
        }
      })
    }
    else{
      setUserSrch([])
    }
  },[user_typed])

  return (
    <div className="App">
      <div className="container_search_user">
        <div className="search_user">
          <div className="box_search_user">
          <input placeholder="cerca utente..." value={user_typed} onChange={e => setUserTyped(e.target.value)}></input>
          {users_srch.length > 0 &&  <div className="show_users">
          {
            users_srch.map(el => {
              console.log(el)
              return <User user={{}}/>
            })
          }
          </div> }
          </div>
        </div>
        <div></div>
      </div>
      <div className="container_main">
      <Main setUser={setUser} users={users} />
      </div>
    </div>
  );



}

export default App;
