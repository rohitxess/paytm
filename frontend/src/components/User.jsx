import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// users component 

export const Users = () => {
    // replace with the backend call which will search users to whome we want to send money 

    const [users, setUsers] = useState([]);
    const [filter, setFiler] = useState("");

    // we should also add debouncing here in the real world 
    
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
        })
    }, [users])

    return <>
        <div className="font-bold mt-6 text-lg pl-4">
            Users
        </div>
        <div className="my-2 pl-4">
            <input onChange={(e) => {
                setFiler(e.target.value)
            }} typeof="text" placeholder="Search Users....." className="w-full px-2 py-1 border rounded-md border-slate-200 text-sm"></input>
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
            <Button onClick={(e) => {
                useNavigate("/send?id=" +user._id +"&name=" +user.firstName )
            }} label={"Send Money"} />
        </div>
    </div>
}