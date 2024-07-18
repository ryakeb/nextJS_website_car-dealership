import { useState } from "react"

export default function Searchbar({ onSearch }) {
    const [mySearch,setMySearch] = useState("")

    function handleChange(e) {
        setMySearch(e.target.value)
        onSearch(e.target.value)
    }
    return (
        <div className="flex flex-col items-center justify-center py-2 font-mono text-gray-700">
            <input
                type="text"
                value={mySearch}
                onChange={handleChange}
                placeholder="Search"
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            />
        </div>
    )
}
