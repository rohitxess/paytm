import { Heading} from "@/components/Heading";
import { Subheading} from "@/components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { InputBox } from "../components/InputBox";


export const Signup = () => {
    return <div>
        <div>
            <div>
                <Heading label = {"Sign Up"}/>
                <Subheading label = {"Enter your information to create an account"} />
                <InputBox placeholder ="Enter your first name" label ={"First Name"} />
                <InputBox placeholder ="Enter your last name" label ={"Last Name"} />
                <InputBox placeholder ="Enter your email id" label ={"Email"} />
                <InputBox placeholder ="Enter your password" label ={"Password"} />
                <div>
                    <Button label ={"Sign up"}/>
                </div>
                <BottomWarning label ={"Already have an account?"}/>
            </div>
        </div>
    </div>
}