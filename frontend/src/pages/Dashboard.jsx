import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/User"


export const Dashboard = () => {
    return <div className="py-20">
        <Appbar />
        <Balance value={"10,000"}/>
        <Users />
    </div>
}