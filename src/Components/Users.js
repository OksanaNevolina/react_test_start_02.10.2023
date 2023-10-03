import {useContext} from "react";
import {Context} from "../App";
import User from "./User";


const Users = () => {
   const context = useContext(Context);
    console.log(context)
    return (
        <div>
            {context.users.map(user=><User  key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
