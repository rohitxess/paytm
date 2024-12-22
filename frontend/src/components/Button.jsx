

export const Button = ({label, onClick}) => {
    return <button className="text-white bg-black-700 w-full hover:bg-black-800 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-black-800">
        {label}
    </button>

}


