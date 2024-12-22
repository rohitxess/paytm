import { Link } from "react-router-dom";

export const BottomWarning = ({label, buttonText, to}) => {
    return <div>
        <div>
            {label}
        </div>
        <div>
            <Link className="pointer underline pl-1 cursor-pointer" to={to}>
                {buttonText}
            </Link>
        </div>
    </div>
}