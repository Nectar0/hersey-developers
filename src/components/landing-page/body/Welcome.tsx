import React from "react";

const Welcome: React.FC<{}> = () => {
    return (
        <div className="flex bg-gradient-to-b from-zinc-100 to-[#ABC7CA] shadow-md overflow-hidden">
            <div className="flex flex-col items-center w-full mx-auto p-10 pb-5 mb-10 text-4xl">
                <h3 className="font-bold font-Grotesk">Welcome to <a className="font-bold text-[#31b2c0] font-Grotesk">Hersey Developers.</a>
                </h3>
                <p className="md:w-5/12 text-xl font-UI text-slate-800 mt-5 ">Hersey Developers is a <a className="font-bold">remote, 60-hour</a> software engineering internship.</p>
            </div>
        </div>
    )
}

export default Welcome;