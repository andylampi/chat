import { useState } from "react";
import Main from "./main.js"
function App() {
  const [users, setUser] = useState({})
  return (
    <div className="App">
      <Main setUser={setUser} users={users} />
    </div>
  );



}

export default App;
