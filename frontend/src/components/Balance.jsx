

export const Balance = ({value}) => {
    return <div className="flex pl-4" >
        <div className="font-bold text-lg">
            Your Balance is 
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}