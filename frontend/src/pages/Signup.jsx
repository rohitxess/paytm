import { Heading} from "../components/Heading";
import { SubHeading} from "../components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { InputBox } from "../components/InputBox";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Signup = () => {

    // to log the values when the values changes in the input box
    const [firstName, setfirstName] = useState("");
    const [lastName, setlasttName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max">
                <Heading label = {"Sign Up"}/>
                <SubHeading label = {"Enter your information to create an account"} />
                <InputBox onchange = {(e) => {
                    setfirstName(e.target.value);
                }} placeholder ="Enter your first name" label ={"First Name"} />
                <InputBox onchange={ (e) => {
                    setlasttName(e.target.value);
                }} placeholder ="Enter your last name" label ={"Last Name"} />
                <InputBox onchange={ (e) => {
                    setUserName(e.target.value);
                }} placeholder ="Enter your email id" label ={"Email"} />
                <InputBox onchange={ (e) => {
                    setPassword(e.target.value);
                }} placeholder ="Enter your password" label ={"Password"} />
                <div className="pt-4">
                    <Button onClick={ async() => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            userName,
                            firstName,
                            lastName,
                            password
                        });
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard")
                    }} label ={"Sign up"}/>
                </div>
                <BottomWarning label ={"Already have an account?"} buttonText={"Sign In"} to={"/signin"} />
            </div>
        </div>
    </div>
}