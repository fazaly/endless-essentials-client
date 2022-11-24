import React from 'react'

const PrimaryButton = ({ children}) => {
    return (
        <button className="btn w-full border-none bg-gradient-to-r from-[#F44369] to-[#D64270] text-white">
            {children}
        </button>
    );
}

export default PrimaryButton;

// from-[#1E7870] to-[#6A9289] text-white