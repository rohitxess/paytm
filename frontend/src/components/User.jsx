import { useState } from "react";
import { Button } from "./Button";
// users component 

export const Users = () => {
    // replace with the backend call which will search users to whome we want to send money 

    const [users, setUsers] = useState([{
        firstName: "Rohit",
        lastName: "Xess",
        _id: 1
    }]);

    return <>
        <div className="font-bold mt-6 text-lg pl-4">
            Users
        </div>
        <div className="my-2 pl-4">
            <input typeof="text" placeholder="Search Users....." className="w-full px-2 py-1 border rounded-md border-slate-200 text-sm"></input>
        </div>
        <div>
            {users.map(user => <User user = {user} />)}
        </div>
    </>
}

//write the User function 

function User({user}) {
    return <div className="flex justify-between pl-4">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center">
                <div className=" flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div> 
            <div className="flex flex-col justify-center h-full p-3">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div classname="flex flex-col justify-center h-full">
            <Button label={"Send Money"} />
        </div>
    </div>
}