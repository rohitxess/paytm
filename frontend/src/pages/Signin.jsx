
import { Heading} from "../components/Heading";
import { SubHeading} from "../components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { InputBox } from "../components/InputBox";


export const Signin = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max">
                <Heading label = {"Sign In"}/>
                <SubHeading label = {"Enter your your credentials to access your account"} />
                <InputBox placeholder ="Enter your email id" label ={"Email"} />
                <InputBox placeholder ="Enter your password" label ={"Password"} />
                <div className="pt-4">
                    <Button label ={"Sign up"}/>
                </div>
                <BottomWarning label ={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
            </div>
        </div>
    </div>
}