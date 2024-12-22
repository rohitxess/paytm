

export const SendMoney = () =>{
    return <div className="h-screen flex justiify-center  bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div className="border h-min text-card-foregroun max-w-md p-4 space-x-4">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center">
                            <span className="text-2xl text-white pl-4">A</span>
                        </div>
                        <h3 className="text-2xl font-semibold">Friend's Name</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled amount">Amount (in Rs) </label>
                            <input type="text" placeholder="Enter amount" className="flex h-10 w-full rounded-md border-rounded" />
                            <div>
                                <button className="justify-center rounded-md text-sm font-medium bg-black-200">Initate Transfer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}