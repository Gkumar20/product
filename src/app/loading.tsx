import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="relative w-36 h-36 rounded-full bg-transparent shadow-[25px_25px_75px_rgba(0,0,0,0.55)] border border-gray-300 dark:border-gray-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-5 rounded-full border border-dashed border-gray-400 dark:border-gray-600 shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]"></div>
                <div className="absolute w-12 h-12 rounded-full border border-dashed border-gray-400 dark:border-gray-600 shadow-inner"></div>
                <span className="absolute top-1/2 left-1/2 w-1/2 h-full bg-transparent transform -translate-x-1/2 -translate-y-1/2 origin-top-left animate-[radar_2s_linear_infinite] border-t border-dashed border-gray-500 dark:border-white">
                    <span className="absolute top-0 left-0 w-full h-full bg-green-500 dark:bg-seagreen transform origin-top-left rotate-[-55deg] filter blur-lg drop-shadow-[20px_20px_20px_rgba(34,197,94,0.8)]"></span>
                </span>
            </div>
        </div>
    );
};

export default Loading;
