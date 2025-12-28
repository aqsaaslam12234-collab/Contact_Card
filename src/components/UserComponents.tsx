import { useEffect, useState } from "react";

interface UserTypes{
    id:number;
    username:string;
    email:string;
    phone:number;
}
const UserComponents = () => {
    const[users, setUsers] = useState<UserTypes[]>([]);

    useEffect (() => {

        const fetchData = async() => {
            const request = await fetch("https://dummyjson.com/users")
            const data = await request.json()
            setUsers(data.users)
        };
            fetchData();
            
        }, []);
  return (
    <div className="p-6">
        <h1>Users Data </h1>
        <div>
            {users.map((user)=>(
                <div key={user.id}>
                    <h1>{user.username}</h1>
                    <h1>{user.email}</h1>
                    <h1>{user.phone}</h1>
                   
                </div>


            ))}
            
        </div>
      
    </div>
  )
}

export default UserComponents
