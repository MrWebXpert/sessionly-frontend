import React from 'react'

export default function BaseButton({ type, label }) {
    return (
        <>
            <button type={type}
                className="mt-20 px-4 py-3 uppercase rounded-full bg-[#10b981] hover:bg-gray-500 text-white font-semibold text-center block w-3/4 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer">
                {label}
            </button>
        </>
    )
}
