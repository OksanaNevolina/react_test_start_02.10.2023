import React, {useState} from 'react';
import UsersComponent from "./Components/UsersComponent";
import Posts from "./Components/Posts";

const App = () => {
    const [user,setUser] = useState(null);
  return (
      <div>
        <UsersComponent setUser={setUser}/>
          <div>{user && <Posts user={user}/>}</div>
      </div>
  );
};

export default App;
